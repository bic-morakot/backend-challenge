const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');

const app = express();

app.get('/api', function (req,res) {

fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        var product = JSON.parse( data );
        var count = product.categories1.product;
       for (var i = 0; i < count.length; i++) {
            if (count[i].category == product.categories1.name){
                console.log(JSON.stringify(count[i]));
            } else {
                console.log("no matched category is" , JSON.stringify(count[i]));
            } 
        }
        
        res.end(JSON.stringify(product));
    });
})
const server = app.listen(8081, function () {
    const port = server.address().port;
    console.log("Server is running at port: %s", port);
});