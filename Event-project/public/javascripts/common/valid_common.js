module.exports = {

    /**
     * Method check null lang
     */
    valid_lang: (lang) => {
        let language = lang;
        if (lang == null || lang == '' || lang == "" || (lang != 'vi' && lang != 'en')) {
            language = 'vi';
        }
        return language;
    },
    /**
     * Valid event
     */
    valid_event: (event) => {
        let events = event;
        if (event == null || event == '' || event == "") {
            events = 'Events';
        }
        return events;
    },
    /**
     * Check null 
     */
    valid_null: (data_input) => {
        if (data_input == null || data_input == '' || data_input == "") {
            return false;
        }
        return true;
    },
}