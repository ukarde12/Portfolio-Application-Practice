const constants = require('../userDefinedConstants');

var GeneralUIpath = constants.GENERAL_UI_PATH;

/**
 * This method is used for getting login page  
 * @param {*} req 
 * @param {*} res 
 */
module.exports.login_get = (req, res) => {
    console.log('Inside authController 1');
    res.sendFile('index.html', { root: GeneralUIpath })
}

/**
 * This method is used for getting registration page 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.registration_get = (req, res) => {
    console.log('Inside authController 2');
    res.sendFile('registration/registration.html', { root: GeneralUIpath })
}

/**
 * This method is used for storing new user to DB ,Once user fill
 * its own details during registration
 * @param {} req 
 * @param {*} res 
 */
module.exports.registration_post = (req, res) => {
    console.log('Inside Registration post controller');
    const { firstname, lastname, username, password } = req.body;
    console.log(firstname, lastname, username, password);
}

/**
 * This method is used for checking weather user is login or not 
 * @param {*} req 
 * @param {*} res 
 */
module.exports.login_post = (req, res) => {
    console.log('Inside login post controller');
    const { username, password } = req.body;
    console.log(username, password);
}