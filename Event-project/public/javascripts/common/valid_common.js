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
    valid_event: (event) => {
        let events = event;
        if (event == null || event == '' || event == "") {
            events = 'Events';
        }
        return events;
    }
}