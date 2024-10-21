const mongoose = require("mongoose");
const emailManager = require("../../../Manager/emailManager");

const forgotPassword = async (req,res) => {

    const usersModel = mongoose.model("users")

    const {email} = req.body;// Extract email from the request body

    //validation
    if(!email) throw "Email is required!";

    const getUser = await usersModel.findOne({
        email: email
    })
    if(!getUser) throw "This email does not exists in our system"

    const reset_code = Math.floor(10000*Math.random()*9000);//function to generate 5 random digits

    // Update the user document with the generated reset code
    await usersModel.updateOne({
        email:email
    },{
        reset_code : reset_code
    },{
        runValidators:true
    })

     // Send the reset code via email using the emailManager (Mailtrap used for testing) 
    await emailManager(getUser.email,"Your Password Reset code is : " + reset_code, "<h1>Your Password Reset code is : </h1>"+ reset_code,  "Reset your password - Expense Tracker PRO")


    // Respond with a success message after the email is sent
    res.status(200).json({
        status : "Reset code send to Email successfully"
    })


}
module.exports = forgotPassword;