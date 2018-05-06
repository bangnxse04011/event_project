const express = require('express');
const page_common = require('../public/javascripts/common/page_common');
const router = express.Router();

/* GET users listing. */
router.get('/update', function (req, res, next) {
    res.render(page_common.page_updating);
});

module.exports = router;
