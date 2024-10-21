const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const emailManager = require("../../../Manager/emailManager");

const resetPassword = async (req, res) => {

    const usersModel = mongoose.model("users");

    const {email, new_password, reset_code} = req.body; //Extract email, new password, and reset code from the request bod

    // // Validate that all necessary fields are provided
    if(!email) throw "Email is required";
    if(!new_password) throw "please provide new password";
    if(!reset_code) throw "reset code is required";
    if(new_password.length<8) throw "password must be 8 characters long"


     // Find the user by email and reset code
    const getUserWithResetCode = await usersModel.findOne({
        email: email,
        reset_code : reset_code
    })

    if(!getUserWithResetCode) throw "Reset code does not match!"


    //hash the new passoword
    const hashedPassword = await bcrypt.hash(new_password, 12);

    // If the reset code matches, update the user's password and clear the reset code
    await usersModel.updateOne({
        email:email
    },{
        password : hashedPassword,
        reset_code : "" //clear the reset code
    },{
        runValidators : true
    })

    //// Send an email notification to the user about the successful password reset
    await emailManager(email,"Your Password Reseted successfully","Your Password Reseted successfully",  "Reset your password - Expense Tracker PRO")



    //Respond with success status and message
    res.status(200).json({
        status : "success",
        message: "Password Reseted successfully!"
    })

}

module.exports = resetPassword;
