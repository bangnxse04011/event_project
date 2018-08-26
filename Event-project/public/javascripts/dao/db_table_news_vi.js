const connection_db = require('./db_connect_postgresql');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const News_VI = connection_db.define('News_vi', {
    title: {
        type: Sequelize.STRING(10485760)
    },
    details: {
        type: Sequelize.STRING(10485760)
    },
    path_img: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.INTEGER
    }
});

News_VI.sync();

module.exports = News_VI;