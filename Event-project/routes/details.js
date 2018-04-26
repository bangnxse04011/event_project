const express = require('express');
const router = express.Router();
const fs = require("fs");
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const gallery_table_vi = require('../public/javascripts/dao/db_table_collection_vi');
const gallery_table_en = require('../public/javascripts/dao/db_table_collection_en');
/**
 * Get home page
 */
router.get('/:id', function (req, res, next) {
  try {
    // Get language view
    let id = req.params['id'];
    let lang = req.session.lang;
    // Default language vi
    let title = title_common.title_home_vi;
    let logo_name = info_common.logo_name_vi;
    let menu_file_name = "common_vi.json";
    let tableshow = gallery_table_vi;
    req.session.CUR_URl = '/' + lang;
    if (lang == null || lang == '' || lang == "") {
      lang = 'vi';
    } else if (lang == 'en') {
      menu_file_name = "common_en.json";
      title = title_common.title_home_en;
      logo_name = info_common.logo_name_en;
      tableshow = gallery_table_en;
    }
    req.session.lang = lang;
    req.session.CUR_URl = '/details/' + id;
    let menu_data_file = fs.readFileSync(menu_file_name);
    var menu_data = JSON.parse(menu_data_file);
    // info_total_home_page total data view in homepage
    let info_total_home_page = [title, logo_name];

    tableshow.findOne({
      where: {
        id: id
      }
    }).then(result => {
      // get total view
      let total_view = result.dataValues.total_view;
      if (total_view == null || total_view == '' || total_view == "") {
        total_view = 1;
      } else {
        total_view += 1;
      }
      // Update view data
      result.updateAttributes({
        total_view: total_view
      })
      // Find all data from table event
      tableshow.findAll(
        {
          plain: false,
          limit: 6
        }
      ).then(result_limit_6 => {
        let gallery_details = result_limit_6.map((r) => (r.toJSON()));
        res.render(page_common.page_detail, { info_total_home_page: info_total_home_page, menu_data: menu_data, lang_session: lang, info: result, gallery_details: gallery_details, controller: 'details' });
      });
    })
  } catch (e) {
    res.render(page_common.page_error);
  }
});

module.exports = router;