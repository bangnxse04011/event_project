var connection_db = require('./db_connect_postgresql');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Account = connection_db.define('account', {
    fullName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    id_user: { type: Sequelize.STRING },
    user_name: { type: Sequelize.STRING },
    pass_word: { type: Sequelize.STRING },
    phone_number : { type: Sequelize.STRING },
    role: { type: Sequelize.INTEGER }
});

Account.sync();

module.exports = Account;

