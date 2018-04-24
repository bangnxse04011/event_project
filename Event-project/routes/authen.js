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
        if (info == null || info == '' || info == "") {
            res.redirect('/admin/login');
        } else {
            let account_details = info.dataValues;
            req.session.status = account_details['role']
            req.session.user_login_okie = user_name;
            res.redirect('/admin-home/home');
        }
    }).catch(function (e) {
        res.redirect('/admin/login');
    });
});

/**
 * Method login method get(F5 browser)
 */
router.get('/authen', function (req, res, next) {
    res.redirect('/admin/login');
});

/**
 * Refresh login page
 */
router.get('/login', function (req, res, next) {
    try {
        let user = req.session.user_login_okie;
        if (user == null || user == '' || user == "") {
            res.render(page_common.page_login, { mess: 'Please login' });
        } else {
            res.render(page_common.page_admin, { user_login: user_name });
        }
    } catch (e) {
        res.redirect('/admin/login');
    }
});


/**
 * Method logout
 */

router.get('/log_out', function (req, res, next) {
    delete req.session.user_login_okie;
    delete req.session.status
    res.redirect('/admin/login');
});
module.exports = router;
