const { Router } = require('express');
const authController = require('../controller/authController')
const route = Router();

// All auth routes will reside here

/**Route For get login page */
route.get('/login', authController.login_get)

/**Route For get Registration page */
route.get('/signup', authController.registration_get)

/**Route For user authorization */
route.post('/login', () => {})

/**Route For save new user to DB */
route.post('/signup', () => {})

module.exports = route;