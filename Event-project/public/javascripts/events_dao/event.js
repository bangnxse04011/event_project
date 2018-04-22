const db_table_event_vi = require('../dao/db_table_event_demo_vi');
const db_table_event_en = require('../dao/db_table_event_demo_en');
const valid_common = require('../common/valid_common');

module.exports = {
    /**
     * Method find all events vi
     */
    find_all_event_vi: () => {
        return db_table_event_vi.findAll();
    },
    /**
     * Method find all events en
     */
    find_all_event_en: () => {
        return db_table_event_en.findAll();
    }
}