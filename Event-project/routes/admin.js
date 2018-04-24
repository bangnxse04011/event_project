const express = require('express');
const router = express.Router();
const fs = require("fs");
const formidable = require('formidable');
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const funtion_helper = require('../public/javascripts/common/helper');
const uuidv1 = require('uuid/v1');
const table_event_en = require('../public/javascripts/dao/db_table_event_demo_en');
const table_event_vi = require('../public/javascripts/dao/db_table_event_demo_vi');
const table_collection_en = require('../public/javascripts/dao/db_table_collection_en');
const table_collection_vi = require('../public/javascripts/dao/db_table_collection_vi');
const table_gallery_vi = require('../public/javascripts/dao/db_table_collection_vi');
const table_gallery_en = require('../public/javascripts/dao/db_table_collection_en');
/**
 * Method home page
 */
router.get('/home', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page_common.page_login, { mess: 'Please login' });
    }
    try {
        // Get language view

        let lang = req.session.lang;
        // Default language vi
        let title = title_common.title_home_vi;
        let logo_name = info_common.logo_name_vi;
        let menu_file_name = "common_vi.json";

        req.session.CUR_URl = '/' + lang;
        if (lang == null || lang == '' || lang == "") {
            lang = 'vi';
        }
        req.session.lang = lang;
        let menu_data_file = fs.readFileSync(menu_file_name);
        var menu_data = JSON.parse(menu_data_file);
        // info_total_home_page total data view in admin page
        let info_total_home_page = [title, logo_name];
        res.render(page_common.page_admin, { info_total_home_page: info_total_home_page, menu_data: menu_data, lang_session: lang });
    } catch (e) {
        console.log(e);
        res.render(page_common.page_error);
    }
});
/**
 * add Event
 */
router.post('/add_event/:type', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page_common.page_login, { mess: 'Please login' });
    }
    try {
        var form = new formidable.IncomingForm();
        let path = __dirname;
        var table_event = null;
        path = path.replace('routes', '');
        form.uploadDir = path + '/public/stylesheets/img/';
        form.parse(req, function (err, fields, file) {
            var titlee = fields.title;
            var price = fields.price;
            var address = fields.address;
            var description = fields.description;
            var date = fields.date;
            var checklang = fields.lang_add;
            var collection_value = 0;
            // Get input
            let check_titlee = funtion_helper.valid_input(titlee);
            let check_price = funtion_helper.valid_input(price);
            let check_address = funtion_helper.valid_input(address);
            let check_description = funtion_helper.valid_input(description);
            let check_date = funtion_helper.valid_input(date);
            let check_checklang = funtion_helper.valid_input(checklang);
            // check null
            // if (check_price == false || check_titlee == false || check_address == false || check_description == false || check_date == false || check_titlee == false || check_checklang == false) {
            //     res.render(page_common.page_error);
            //     return;
            // }
            let type = req.params.type;
            // Check type and lang
            if (type == 'event') {
                collection_value = fields.gallary;
                if (checklang == 'en') {
                    table_event = table_collection_en;
                } else {
                    table_event = table_collection_vi;
                }
            } else {
                if (checklang == 'en') {
                    table_event = table_event_en;
                } else {
                    table_event = table_event_vi;
                }
            }
            let path_name = file.files.name.split('.');
            if (path_name && path_name.length > 1) {
                let new_name_file = uuidv1() + '.' + path_name[1];
                //path tmp trên server
                var path = file.files.path;
                //thiết lập path mới cho file
                var newpath = form.uploadDir + new_name_file;
                fs.rename(path, newpath, function (err) {
                    if (err) throw err;
                    table_event.create({
                        fullName: titlee,
                        title: titlee,
                        address: address,
                        description: description,
                        path_img: new_name_file,
                        status: collection_value,
                        price: price,
                        date: date
                    }).then(user => {
                        res.redirect('/admin-home/home');
                    });
                });
            }
        });
    } catch (e) {
        console.log(e);
        res.render(page_common.page_error);
    }
});

router.get('/find_all', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page_common.page_login, { mess: 'Please login' });
    }
    let event = req.query.change;
    if (event == null || event == '' || event == "") {
        res.render(page.page_error);
    }
    if (event == 'event') {
        table_event_vi.findAll({
            plain: false
        }).then(video => {
            let video_array = video.map((r) => (r.toJSON()));
            res.end(JSON.stringify(video_array));
        }).catch(function (err) {
            res.render(page.page_error);
        });
    } else {
        table_gallery_vi.findAll({
            plain: false
        }).then(video => {
            let video_array = video.map((r) => (r.toJSON()));
            res.end(JSON.stringify(video_array));
        }).catch(function (err) {
            res.render(page.page_error);
        });

    }
});

router.get('/delete_post', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page_common.page_login, { mess: 'Please login' });
    }
    var id_delete = req.query.id_delete;
    var event = req.query.type;
    // var uname_session = req.session.user_login_okie;
    // if (uname_session == null || uname_session == '' || uname_session == "") {
    //     res.redirect('/admin-home/home/');
    // }
    if (event == 'event') {
        table_event_en.destroy({
            where: {
                id: id_delete,
            }
        });
        table_event_vi.destroy({
            where: {
                id: id_delete,
            }
        });
    } else {
        table_gallery_en.destroy({
            where: {
                id: id_delete,
            }
        });
        table_gallery_vi.destroy({
            where: {
                id: id_delete,
            }
        });
    }
    res.redirect("/admin-home/home");
});

module.exports = router;