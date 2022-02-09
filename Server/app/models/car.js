let mongoose = require('mongoose');

var Car = mongoose.Schema({
    carRegNo : {type : String ,require : true},
    carModel : {type : String ,require : true},
    carColor : {type : String ,require : true},
    dealerName : {type : String ,require : true},
    pinCode : {type: Number,require : true}
}); 

module.exports = Car = mongoose.model('car', Car);