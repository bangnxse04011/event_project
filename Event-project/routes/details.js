const express = require('express');
const router = express.Router();
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');

/**
 * Get home page
 */
router.get('/:id', function (req, res, next) {
  res.render(page_common.page_detail);
});

module.exports = router;