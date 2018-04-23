const connection_db = require('./db_connect_postgresql');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Info_support_vi = connection_db.define('info_support_vi', {
    fullName: { type: Sequelize.STRING(10485760) },
    title: { type: Sequelize.STRING(10485760) },
    address: { type: Sequelize.STRING(10485760) },
    description: { type: Sequelize.STRING(10485760) },
    path_img: { type: Sequelize.STRING },
    status: { type: Sequelize.INTEGER },
    total_view: { type: Sequelize.INTEGER },
    money: { type: Sequelize.INTEGER }
});

// Info_support_vi.sync();

module.exports = Info_support_vi;

