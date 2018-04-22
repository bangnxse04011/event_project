const express = require('express');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const db_feed_back_vi = require('../public/javascripts/dao/db_table_feed_back_vi');
const db_feed_back_en = require('../public/javascripts/dao/db_table_feed_back_en');

const router = express.Router();

/**
 * Controller if lang is null
 */
router.get('/:lang', function (req, res, next) {
    try {
        // Get language view
        let lang = req.params['lang'];
        let language = valid_common.valid_lang(lang);
        // Default language vi
        if (language == 'vi') {
            db_feed_back_vi.findAll({ plain: false, limit: 3 }).then(feed_back => {
                let feed_back_details = feed_back.map((r) => (r.toJSON()));
                res.end(JSON.stringify(feed_back_details));
            });
        } else if (language == 'en') {
            db_feed_back_en.findAll({ plain: false, limit: 3 }).then(feed_back => {
                let feed_back_details = feed_back.map((r) => (r.toJSON()));
                res.end(JSON.stringify(feed_back_details));
            });
        }
        // info_total_home_page total data view in homepage
    } catch (e) {
        res.render(page_common.page_error);
    }
});