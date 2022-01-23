const mongoClient = require('mongodb').MongoClient;
const mongooseClient = require('mongoose');
const path = require('path')
require('dotenv-flow').config();

const DB_URL = process.env.DB_HOST;

/**
 * (Without Mongoose)
 * This method is used for database connection with URL given in 
 * properties file 
 * During connection - 2 outputs are possible 
 * 1. Response may having client - if its client the we are trying select any collection & then taking that obj to use further
 * 2. Response may having err - then we are returning false response
 * 
 * @param {*} callback 
 */
// module.exports.connectToMongo = function(callback) {
//     console.log("DB_URL " + DB_URL);
//     mongooseClient.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//         if (err) {
//             console.log("1. Inside false callback");
//             console.log("err is", err);
//             callback({ success: false })
//         } else {
//             console.log("2. Inside true callback");
//             var databaseObj = client.db("test");
//             callback({ success: true, databaseObj: databaseObj })
//         }
//     })
// }


/**
 * (With Mongoose)
 * This method is used for database connection with URL given in 
 * properties file 
 * During connection - 2 outputs are possible 
 * 1. Response may having client - if its client the we are trying select any collection & then taking that obj to use further
 * 2. Response may having err - then we are returning false response
 * 
 * @param {*} callback 
 */
module.exports.connectToMongo = function(callback) {
    console.log("DB_URL " + DB_URL);
    mongooseClient.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(dbClient => {
        callback({ success: true, databaseObj: dbClient });
    }).catch(err => {
        console.log(err);
        callback({ success: false, databaseObj: err });
    })
}