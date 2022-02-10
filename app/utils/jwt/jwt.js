const jwt = require('jsonwebtoken');
const secret = process.env.AUTH_SECRET;

exports.verifyAuthToken =  (req,res,next) => {
    let token = req.headers["x-access-token"];
    if(!token)
        return res.status(401).json({'Message' : 'Auth Token Not Provided in the Request.'});
    jwt.verify(token, secret, (err, decoded) => {
        if (err) 
          return res.status(401).json({message: "Unauthorized Request"});
        req.dealerName = decoded;
        next();
    });
}

exports.generateAuthToken = (dealerName) => {
    return jwt.sign({value:dealerName},secret,{expiresIn:86400});
}

// module.exports = Token = {verifyAuthToken : this.verifyAuthToken,generateAuthToken : this.generateAuthToken}