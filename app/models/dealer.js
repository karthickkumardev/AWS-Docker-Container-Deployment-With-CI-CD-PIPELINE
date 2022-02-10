let mongoose = require('mongoose');

var Dealer = mongoose.Schema({
    dealerName : {type : String ,require : true},
    password : {type : String,require : true},
    pinCode : {type: Number,require : true}
}); 

module.exports = Dealer = mongoose.model('dealer', Dealer);