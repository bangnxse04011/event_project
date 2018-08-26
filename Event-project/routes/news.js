const express = require('express');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const db_news_vi = require('../public/javascripts/dao/db_table_news_vi');
const db_news_en = require('../public/javascripts/dao/db_table_news_en');

const router = express.Router();

/**
 * Controller if lang is null
 */
router.get('/:lang', function (req, res, next) {
    try {
        // Get language view
        let lang = req.params['lang'];
        let language = valid_common.valid_lang(lang);
        req.session.lang = language;
        // Default language vi
        if (language == 'vi') {
            db_news_vi.findAll({
                plain: false,
                limit: 10
            }).then(new_vi => {
                let db_news_vi_details = new_vi.map((r) => (r.toJSON()));
                res.end(JSON.stringify(db_news_vi_details));
            });
        } else if (language == 'en') {
            db_news_en.findAll({
                plain: false,
                limit: 10
            }).then(new_en => {
                let db_news_en_details = new_en.map((r) => (r.toJSON()));
                res.end(JSON.stringify(db_news_en_details));
            });
        }
        // info_total_home_page total data view in homepage
    } catch (e) {
        res.render(page_common.page_error);
    }
});

router.post('/add_new', function (req, res, next) {
    // let user = req.session.user_login_okie;
    // if (user == null || user == '' || user == "") {
    //     res.render(page_common.page_login, {
    //         mess: 'Please login'
    //     });
    // }
    try {
        let lang = req.body.lang;
        let title = req.body.title;
        let details = req.body.details;
        let path_img = req.body.path_img;
        var table_new = null;
        table_new = db_news_en;
        if (lang == 'vi') {
            table_new = db_news_vi;
        }
        table_new.create({
            title: title,
            details: details,
            path_img: path_img,
            status: 0
        }).then(user => {
            res.redirect('/admin-home/home');
        });
    } catch (e) {
        console.log(e);
        res.render(page_common.page_error);
    }
});

module.exports = router;