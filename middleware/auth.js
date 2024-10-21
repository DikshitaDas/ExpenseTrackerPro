const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res,next) => {
    
    try{
        const accessToken = req.headers.authorization.replace("Bearer ",""); // this replace function used to replace the bearer with an empty string to only access the token 
        const JWT_payload= jsonwebtoken.verify(accessToken, process.env.jwt_salt);   
        //console.log(JWT_payload)
        req.user = JWT_payload
    }
    catch(e){
        res.status(401).json({
            status : "failed",
            message : "Unauthorized"
        })
        return;
    }

    

    next();
};
module.exports = auth;