const connection_db = require('./db_connect_postgresql');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Event_demo_vi = connection_db.define('event_demo_vi', {
    fullName: { type: Sequelize.STRING(10485760) },
    title: { type: Sequelize.STRING(10485760) },
    address: { type: Sequelize.STRING(10485760) },
    description: { type: Sequelize.STRING(10485760) },
    path_img: { type: Sequelize.STRING },
    status: { type: Sequelize.INTEGER },
    total_view: { type: Sequelize.INTEGER },
    price: { type: Sequelize.INTEGER },
    date: { type: Sequelize.DATE }
});

Event_demo_vi.sync();

module.exports = Event_demo_vi;

