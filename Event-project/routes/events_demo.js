const express = require('express');
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const db_events_vi = require('../public/javascripts/dao/db_table_event_demo_vi');
const db_events_en = require('../public/javascripts/dao/db_table_event_demo_en');
const events_dao = require('../public/javascripts/events_dao/event');
const router = express.Router();

/**
 * Controller if lang is null
 */
router.get('/', function (req, res, next) {
    // Get lang in session
    let lang_session = req.session.lang;
    // Check lang is null
    let language = valid_common.valid_lang(lang_session);
    res.redirect('/events/' + language);
});

/**
 * Get all events from postgres
 * Return JSON data
 */
router.get('/:lang', function (req, res, next) {
    try {
        let lang = req.params['lang'];
        let language = valid_common.valid_lang(lang);
        // Add lang to session
        req.session.lang = language;
        // Check lang vi or en
        if (language == 'vi') {
            db_events_vi.findAll({ plain: false }).then(events_vi => {
                let events_details = events_vi.map((r) => (r.toJSON()));
                res.end(JSON.stringify(events_details));
            });
        } else if (language == 'en') {
            db_events_en.findAll({ plain: false }).then(events_en => {
                let events_details = events_en.map((r) => (r.toJSON()));
                res.end(JSON.stringify(events_details));
            });
        }
    } catch (e) {
        console.log(e);
        res.render(page_common.page_error);
    }
});

module.exports = router;