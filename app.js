let express = require('express');
let app = express();
require('dotenv').config();
const db = require('./app/utils/db/db');
const http = require('http');
let cors = require('cors');
app.use(cors({origin : 'http://localhost:4200'}));
let bodyParser = require('body-parser');
app.use(bodyParser.json());

// let logger = require('./app/utils/logger/logger');

let dealerRoute = require('./app/routes/dealer');
app.use('/dealer',dealerRoute);
app.get('/', (req, res) => {
    res.status(200).send('Hello World This aplllication is deployed through CI CD Pipeline and Docker image');
});

app.use( (err,req,res,next) => {
    if(err){
        console.log(err);
        logger.info({"Error Message" :  "" + err , "Request" : "" + req.originalUrl});
        return res.status(500).json({"Message" : "Internal Server Error"});
    }
    next();
});

module.exports = app;