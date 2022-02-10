let { validateDealerName,validateCarRegNo } = require('../service/dealer/validation/dealerValidation');
let { verifyAuthToken } = require('../utils/jwt/jwt')
let router = require('express').Router();
const dealerService = require('../service/dealer/dealerService')

router.get('/',(req,res,next) => {
    res.send("Response Recieved");
});
router.post( '/api/auth/signin',(req,res,next) => {
    dealerService.signIn(req,res,next);
});

router.post( '/api/auth/signup',[validateDealerName],(req,res,next) => {
    dealerService.signUp(req,res,next);
});

router.post('/api/addcar',[verifyAuthToken,validateCarRegNo],(req,res,next) => {
    dealerService.addCar(req,res,next);
});

router.get('/api/getcars',[verifyAuthToken],(req,res,next) => {
    dealerService.getCars(req,res,next);
});

router.get('*', function(req, res){
    return res.status(404).json({"Message " : "Invalid API"});
});
module.exports = router;