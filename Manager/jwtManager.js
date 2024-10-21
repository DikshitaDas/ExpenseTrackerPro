const jsonwebtoken = require("jsonwebtoken");

const jwtManager = (user) => {

    const accessToken = jsonwebtoken.sign({
        _id: user._id, // Include user's unique ID in the token payload
        name: user.name, // Include user's name in the token payload
       }, 
    process.env.jwt_salt // Secret key used to sign the token (keep this secure in production)
    );

    return accessToken;
}
module.exports = jwtManager;