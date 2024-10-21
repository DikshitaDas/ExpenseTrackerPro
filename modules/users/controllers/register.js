const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwtManager = require("../../../Manager/jwtManager");
const emailManager = require("../../../Manager/emailManager");


const register = async (req, res) => {

    const usersModel = mongoose.model("users");

    const {name, email, password, confirm_password, balance} = req.body;

    //validations....
    if(!email) throw "Email must be provided";
    if(!name) throw "name must be provided";
    if(!password) throw "password must be provided";
    if(password.length<8) throw "password must be at least 8 characters long"
    if(!balance) throw "balance must be provided";

    if(password != confirm_password) throw "password and confirm password does not match"


    const getDuplicateEmail = await usersModel.findOne({
        email : email
    })

    if(getDuplicateEmail) throw "this email already exists"

    // hashing our passwords in the database to keep is safe from hacking

    const hashedPassword = await bcrypt.hash(password, 12);//to be secure we have to hash password minimum 10-12 times




    //create database models
    const createdUser = await usersModel.create({
        name : name,
        email : email,
        password : hashedPassword,
        balance : balance,

    })


    //to direct login after register

    const accessToken = jwtManager(createdUser);

    
    // mail trap for testing 

    const  to = createdUser.email;
    const text  ="welcome to expense tracker pro. we hope you can manage your expenses easily from our platfrom!";
    const html  = "<h1>welcome to expense tracker pro.</h1> <br> <h2> we hope you can manage your expenses easily from our platfrom!</h2>";
    const subject =  "Welcome to Expense Tracker PRO!";


    await emailManager(to,text,html,subject)
   


    res.status(200).json({
        status : "User Register Successfully!!",
        accessToken : accessToken
    })

}

module.exports = register;
