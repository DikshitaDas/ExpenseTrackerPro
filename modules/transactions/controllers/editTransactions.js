const mongoose = require("mongoose");
const validator = require("validator");


const editTransactions = async(req,res)=>{

    const usersModel = mongoose.model("users");
    const transactionsModel = mongoose.model("transactions");

    const {transaction_id, remarks, amount, transactions_type} = req.body;


    //validation
    if(!transaction_id) throw "Transaction ID is required!";
    if(!validator.isMongoId(transaction_id.toString())) throw "Please provide valid id !"

    const getTransactions = await transactionsModel.findOne({
        _id: transaction_id
    })

    if(!getTransactions) throw "Transaction not found!";


    //update user details
    await transactionsModel.updateOne({
        _id: transaction_id,
    },{
        remarks : remarks,
        amount : amount,
        transactions_type : transactions_type
    }, {
        runValidators:true
    }) 

    //update the type of transaction in our user model

    if(getTransactions.transaction_type === "income"){
        await usersModel.updateOne({
            _id: getTransactions.user_id,
        },{
            $inc:{
                balance : getTransactions.amount * -1
            }
        }, {
            runValidators:true
        }) 
    }
    else{
        await usersModel.updateOne({
            _id: getTransactions.user_id,
        },{
            $inc:{
                balance : getTransactions.amount
            } 
        }, {
            runValidators:true
        })
    }



    //respond with success
    res.status(200).json({
        status : "Success",
        message : "edited Successfully"
    })


}
module.exports = editTransactions;