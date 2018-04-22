const express = require('express');
const router = express.Router();
const fs = require("fs");
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');

router.get('/', function (req, res, next) {
    try {
        // Get lang in session
        let lang_session = req.session.lang;
        // Check lang is null
        let language = valid_common.valid_lang(lang_session);
        // req.session.lang = language;
        res.redirect('/details/' + language);
    } catch (e) {
        res.render(page_common.page_error);
    }
});

/* GET home page. */
router.get('/:lang', function (req, res, next) {
    try {
      // Get language view
      let lang = req.params['lang'];
      // Default language vi
      let title = title_common.title_home_vi;
      let logo_name = info_common.logo_name_vi;
      let menu_file_name = "common_vi.json";
      if (lang == null || lang == '' || lang == "") {
        lang = 'vi';
      } else if (lang == 'en') {
        menu_file_name = "common_en.json";
        title = title_common.title_home_en;
        logo_name = info_common.logo_name_en;
      }
      req.session.lang = lang;
      let menu_data_file = fs.readFileSync(menu_file_name);
      var menu_data = JSON.parse(menu_data_file);
      // info_total_home_page total data view in homepage
      let info_total_home_page = [title, logo_name];
      res.render(page_common.page_detail, { info_total_home_page: info_total_home_page, menu_data: menu_data, lang_session: lang });
    } catch (e) {
      console.log(e);
      res.render(page_common.page_error);
    }
  });
module.exports = router;