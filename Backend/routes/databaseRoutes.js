const route = require("./authRoutes")

module.exports = function(router, dbs) {


    router.get('/dev', (req, res) => {
        dbs.dev.collection('portfolio').find({}).toArray((err, docs) => {
            if (err) {
                console.log(err)
                res.error(err)
            } else {
                res.json(docs)
            }
        })
    })
    return route;
}