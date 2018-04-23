var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:lang', function (req, res, next) {
    let lang = req.params['lang'];
    let URL = req.session.CUR_URl;
    console.log("----------------------------------");
    console.log(lang + " --------- " + URL);
    if (URL == null || URL == '' || URL == "") {
        URL = 'vi';
    }
    if (URL.indexOf(lang) <= 0) {
        URL = URL.replace('en', lang);
        if (lang.indexOf('vi') > 0) {
            URL = URL.replace('vi', lang);
        }
    }
    res.redirect(URL);
});

module.exports = router;
