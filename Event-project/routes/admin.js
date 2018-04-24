const express = require('express');
const router = express.Router();
const fs = require("fs");
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
/**
 * Method home page
 */
router.get('/home', function (req, res, next) {
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
router.post('/add_event', function (req, res, next) {
    var form = new formidable.IncomingForm();
    let path = __dirname;
    path = path.replace('routes', '');
    form.uploadDir = path + '/public/stylesheets/images/';
    form.parse(req, function (err, fields, file) {
        var name = fields.name;
        var titlee = fields.title;
        var des_n = fields.description_n;
        var des_d = fields.description_d;
        var goal = fields.goal;

        // Get input
        let check_name = funtion_helper.valid_input(name);
        let check_titlee = funtion_helper.valid_input(titlee);
        let check_des_n = funtion_helper.valid_input(des_n);
        let check_des_d = funtion_helper.valid_input(des_d);
        let check_goal = funtion_helper.valid_input(goal);

        // check null
        if (check_name == false || check_titlee == false || check_des_n == false || check_des_d == false || check_goal == false) {
            res.render(page.page_error);
        }

        let path_name = file.files.name.split('.');
        let new_name_file = uuidv1() + '.' + path_name[1];
        //path tmp trên server
        var path = file.files.path;
        //thiết lập path mới cho file
        var newpath = form.uploadDir + new_name_file;
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            info_support.create({
                fullName: name,
                title: titlee,
                address: des_n,
                description: des_d,
                path_img: new_name_file,
                status: '1',
                total_view: 0,
                money: goal
            });
            res.redirect('/authen/');
        });
    });
    return;
});

module.exports = router;