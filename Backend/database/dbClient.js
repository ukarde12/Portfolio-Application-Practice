const MongoClient = require('mongodb').MongoClient;

const DB_URL = process.env.DB_URL;

function connect(url) {
    return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function() {
    let database = await Promise.all([connect(DB_URL)])

    return {
        local: database[0]
    }
}