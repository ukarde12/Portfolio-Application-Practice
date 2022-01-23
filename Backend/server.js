const http = require('http');
const app = require('../Backend/index.js');
const dbClient = require('../Backend/database/dbClient');
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


/**
 * This method is used for storing mongoDB client to global variable so that we can use that connection everywhere
 */
dbClient.connectToMongo((connectResponse) => {
    if (connectResponse.success) {
        console.log("Connection Successful with Mongo");
        global.dbClient = connectResponse.databaseObj;
        serverStartUp();

    } else {
        console.log("Error while connecting to DB " + connectResponse.databaseObj);

    }

})


/**
 * Server Startup method 
 */
serverStartUp = function() {
    server.listen(process.env.PORT_NO, (err) => {
        if (err) {
            console.log("Error occurred during server starting:", err);
        } else {
            console.log("Server Started for", process.env.APP_NAME, "application on below port", process.env.PORT_NO);
        }
    })
}