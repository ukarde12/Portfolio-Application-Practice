const http = require('http');
const express = require('express')
const bodyParser = require('body-parser');
const constants = require('./userDefinedConstants');

var GeneralUIpath = constants.GENERAL_UI_PATH;
var testPortfolioPath = constants.PORTFOLIO_TEST_PATH;

var app = express();

/**
 * Middleware function to get all the static content
 */
app.use(express.static(GeneralUIpath))
app.use(express.static(testPortfolioPath))
    /**
     * Middleware function
     */
app.use(express.urlencoded({ extended: true }))

/**
 * Express way of calling static pages
 */
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: GeneralUIpath })
});

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


/**
 * Server listening to 3000 port
 */
app.listen(3000, (req, res) => {
    console.log("Server is Started");
})










// var server = http.createServer((req,res)=>{
//     console.log('Create Server method starts');
//     console.log('Dir name',__dirname);
//     res.writeHead(200, {'content-type':'text/html'});
//     var myReadStream = fs.createReadStream('./' + '../UI/index.html','utf8');
//     myReadStream.pipe(res);
// });

// server.listen(3000,'localhost');
// console.log('Server is Starting');