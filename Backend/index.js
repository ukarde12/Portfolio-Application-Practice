const express = require('express')
const bodyParser = require('body-parser');
const constants = require('./userDefinedConstants');

const authRoute = require('./routes/authRoutes');

var GeneralUIpath = constants.GENERAL_UI_PATH;
var testPortfolioPath = constants.PORTFOLIO_TEST_PATH;

var app = express();

/**
 * Middleware function to get all the static content
 */
app.use(express.static(GeneralUIpath));
app.use(express.static(testPortfolioPath));
app.use(express.json())
    /**
     * Middleware function
     */
app.use(express.urlencoded({ extended: true }))

/**
 * Express way of calling static pages
 */

app.get('/login-Details', (req, res) => {
    let username = req.query.username;
    let password = req.query.userPassword;
    console.log('Password is ', password);
    res.send({ 'username': username, 'password': password });
})


/
// Sample get call for portfolio page(This call is for testing purpose only)
app.get("/portfolio", (req, res) => {
    res.sendFile('portfolio.html', {
        root: testPortfolioPath
    })
})

/** routes for login and registration */
app.use(authRoute);

module.exports = app;