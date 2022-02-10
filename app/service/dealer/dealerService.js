const bcrypt = require ('bcrypt');
let Car = require('../../models/car');
let Dealer = require('../../models/dealer');
const { generateAuthToken } = require('../../utils/jwt/jwt');
class DealerService{

    async encodePassword(password){
        let pass = bcrypt.hashSync(password, 10);
        return pass;
    }

    async signUp(req,res,next){
        let dealer = new Dealer({
        dealerName : req.body.dealerName,
        password : await this.encodePassword(req.body.password),
        pinCode : req.body.pinCode
        });

        dealer.save()
            .then( (data) => {
                return res.status(201).json({"Message" : "Dealer Created"});
            })
            .catch( (err) => {
                return res.status(500).json({"Message" : "Failed to Save the Data in DB"});
            })

    }

    signIn(req,res,next){
        let dealer = {
            dealerName : req.body.dealerName,
            password : req.body.password
        }
        Dealer.findOne( {dealerName : dealer.dealerName})
            .then( async (response) => {
                if(response){
                    if(await bcrypt.compare(dealer.password, response.password)){
                        let token = generateAuthToken(dealer.dealerName);
                        return res.status(202).json(
                            {
                                "Message" : "Login SuccessFull", 
                                "dealerName" : response.dealerName,
                                "pinCode": response.pinCode,
                                "authToken" : token
                            });
                    }
                    else
                        return res.status(403).json({"Message" : "Invalid Password"});
                }
                else{
                    return res.status(401).json({"Message" : "Invalid Dealer Name"});
                }
            })
            .catch( (err) => {
                console.log(err);
                return res.status(500).json({"Message" : "Error Occured while fetching Dealer Details"});
            })
    }

    addCar(req,res,next){
        let car = new Car({
            carRegNo : req.body.carRegNo,
            carModel : req.body.carModel,
            carColor : req.body.carColor,
            dealerName : req.body.dealerName,
            pinCode : req.body.pinCode
        });
        car.save()
            .then( (response) => {
                return res.status(201).json({"Message" : "Car Added"});
            })
            .catch( (err) =>{
                return res.status(500).json({"Message": "Failed to Update In DB"}) 
            })
    }
    getCars(req,res,next){
        Car.find()
            .then( (cars) => {
                return res.status(200).json(cars);
            })
            .catch( (err) =>{
                return res.status(500).json({"Message": "Failed to Fetch From DB"}) 
            })

    }
}

module.exports = new DealerService();