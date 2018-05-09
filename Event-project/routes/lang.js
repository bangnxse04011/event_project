const express = require('express');
const valid_common = require('../public/javascripts/common/valid_common');
const router = express.Router();

/* GET users listing. */
router.get('/:lang', function (req, res, next) {
    // Get lang from URL
    let lang = req.params['lang'];
    // Get URL in session
    let URL = req.session.CUR_URl;
    // Valid check case URL null
    if (URL == null || URL == '' || URL == "") {
        URL = '/vi';
    }
    // Change lang form vi to en or en to vi
    if (URL.indexOf('/' + lang) <= 0) {
        if (lang == 'vi') {
            URL = URL.replace('/en', '/vi');
        } else {
            URL = URL.replace('/vi', '/en');
        }
    }
    req.session.CUR_URl = '/' + lang;
    res.redirect('/' + lang);
});

module.exports = router;
