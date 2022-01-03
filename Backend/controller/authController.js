const constants = require('../userDefinedConstants');

var GeneralUIpath = constants.GENERAL_UI_PATH;

module.exports.login_get = (req, res) => {
    console.log('Inside authController 1');
    res.sendFile('index.html', { root: GeneralUIpath })
}

module.exports.registration_get = (req, res) => {
    console.log('Inside authController 2');
    res.sendFile('registration/registration.html', { root: GeneralUIpath })
}