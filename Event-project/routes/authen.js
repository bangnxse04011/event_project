const express = require('express');
const title_common = require('../public/javascripts/common/title_common');
const info_common = require('../public/javascripts/common/info_common');
const page_common = require('../public/javascripts/common/page_common');
const valid_common = require('../public/javascripts/common/valid_common');
const db_table_account = require('../public/javascripts/dao/db_table_account');
const router = express.Router();

/**
 * Method authen to system using username and password
 */
router.post('/authen', function (req, res, next) {
    // Get username and password from form
    let user_name = req.body.user_name;
    let pass_word = req.body.pass_word;
    // Check null username and password
    if (user_name == null || user_name == '' || user_name == "") {
        res.render(page_common.page_login);
    }
    if (pass_word == null || pass_word == '' || pass_word == "") {
        res.render(page_common.page_login);
    }
    // Check authen by username and password
    db_table_account.findOne({
        where: {
            user_name: user_name,
            pass_word: pass_word
        }
    }).then(info => {
        req.session.user_login_okie = user_name;
        // res.render(page_common.page_admin);
    }).catch(function (e) {
        console.log(e);
        res.render('error');
    });
});

/**
 * Refresh login page
 */
router.get('/login', function (req, res, next) {
    let user = req.session.user_login_okie;
    if (user == null || user == '' || user == "") {
        res.render(page_common.page_login, { mess: 'Please login' });
    } else {
        res.render(page_common.page_admin);
    }
});

module.exports = router;
