module.exports = {

    /**
     * Method check null lang
     */
    valid_lang: (lang) => {
        let language = 'en';
        if (lang == null || lang == '' || lang == "") {
            language = 'vi';
        }
        return language;
    }

}