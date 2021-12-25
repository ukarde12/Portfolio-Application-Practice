const http = require('http');
const express = require('express')
const fs = require('fs');
var GeneralUIpath = '../UI/';

var app = express();


app.use(express.static(GeneralUIpath))
/**
 * Express way of calling static pages
 */
app.get('/',(req,res)=>{
    res.sendFile('index.html',{root : GeneralUIpath})
});

/**
 * Server listening to 3000 port
 */
app.listen(3000,(req,res)=>{
    console.log("Server is starting");
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



