let Dealer = require('../../../models/dealer');
let Car = require('../../../models/car');

exports.validateDealerName = (req,res,next) => {
    let dealerName = req.body.dealerName;
    Dealer.findOne( {dealerName : dealerName})
        .then( (dealer) => {
            if(dealer)
                return res.status(409).json({"Message" : "Dealer Name Already Exists"});
            next();
        })
        .catch( (err) => 
            {
                return res.status(502).json({
                        "Message" : "Error Occured While verifying DealerName in DB"
                    });
            }
        );
};

exports.validateCarRegNo = (req,res,next) => {
    let carRegNo = req.body.carRegNo;
    Car.findOne({carRegNo : carRegNo})
            .then( (car) => {
                if(car)
                    return res.status(409).json({"Message" : "Car No Exists"});
                next();
            })
            .catch( (err) => {
                return res.status(502).json({
                        "Message" : "Error Occured While verifying DealerName in DB"});
            });

};

// const dealerValidation = {
//     validateDealerName : this.validateDealerName
// }
// module.exports = dealerValidation;