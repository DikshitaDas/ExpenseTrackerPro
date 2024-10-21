const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const jwtManager = require("../../../Manager/jwtManager");



const login = async(req, res) =>{

    const usersModel = mongoose.model("users");

    const {email, password} = req.body;

    const getUser = await usersModel.findOne({
        email : email
    })
    if(!getUser) throw "email does not exist!!"

    const comparePassword = await bcrypt.compare(password, getUser.password); //return true or false

    if(!comparePassword) throw "Email and Password does not match!";

    // Generate a JSON Web Token (JWT) for the authenticated user
    const accessToken = jwtManager(getUser);


    //success response
    res.status(200).json({
        status  : "success",
        message : "User logged in successfully!",
        accessToken : accessToken
    })

}

module.exports = login;