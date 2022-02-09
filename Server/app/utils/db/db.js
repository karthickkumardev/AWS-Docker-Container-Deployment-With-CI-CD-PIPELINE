let mongoose = require('mongoose');
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseName = 'carDealerPlatform';
let connectionUrl = 'mongodb+srv://karthicbe2405:' + databasePassword + '@cluster0.kvzwb.mongodb.net/' + databaseName + '?retryWrites=true&w=majority';
let db;
mongoose.connect(connectionUrl,{useNewUrlParser: true, useUnifiedTopology: true})
    .then( (res) => { db = res;console.log('DB Connection Established') })
    .catch( (err) => console.log('Failed to Establish DB Connection : Error Message ' + err.message));
module.exports=db;