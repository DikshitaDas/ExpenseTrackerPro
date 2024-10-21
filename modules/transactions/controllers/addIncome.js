const mongoose = require("mongoose");
const validator = require("validator");

const addIncome = async (req, res) => {

    const usersModel = mongoose.model("users");
    const transactionsModel = mongoose.model("transactions");

    const {amount, remarks} = req.body;


    //validation
    if(!amount) throw "Amount is required!";
    if(!remarks) throw "Remarks is required!";
    if(remarks.length<5) throw "Remarks must be atleast 5 characters long!"
    if(!validator.isNumeric(amount.toString())) throw "Amount must be a valid number"
    if(amount<0) throw "Amount must not be negative"

    //created object in transaction model database
    await transactionsModel.create({
        user_id : req.user._id,
        amount : amount,
        remarks : remarks,
        transaction_type : "income",
    })

    //add the income in users database
    await usersModel.updateOne({
        _id : req.user._id,
    },{
        $inc : {
            balance: amount //increase the balance according to the amount given by the user
        }
    }, {
        runValidators : true
    })



    res.status(200).json({
        status : "Success",
        message : "Income added Successfully"
    })

}
module.exports = addIncome;