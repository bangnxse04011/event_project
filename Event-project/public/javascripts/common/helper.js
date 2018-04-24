module.exports = {

    valid_input: (input) => {
        if (input == null || input == "" || input == '') {
            return false;
        }
        return true;
    }
}