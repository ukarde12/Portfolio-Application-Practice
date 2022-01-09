const http = require('http');
const app = require('../Backend/index.js');
require('dotenv-flow').config();

/**
 * create Server of http method is responsible for creating  server and adding everything to server 
 * 
 * app contains everything (all routes) 
 * 
 * (We are taking some properties from env file)
 * 
 */
const server = http.createServer(app);

server.listen(process.env.PORT_NO, (err) => {
    if (err) {
        console.log("Error occurred during server starting:", err);
    } else {
        console.log("Server Started for", process.env.APP_NAME, "application on below port", process.env.PORT_NO);
    }

})