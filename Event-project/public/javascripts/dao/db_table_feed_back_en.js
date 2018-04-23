const connection_db = require('./db_connect_postgresql');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Feed_back_en = connection_db.define('feed_back_en', {
    fullName: { type: Sequelize.STRING(10485760) },
    description: { type: Sequelize.STRING(10485760) },
    status: { type: Sequelize.INTEGER }
});

// Feed_back_en.sync();

module.exports = Feed_back_en;

