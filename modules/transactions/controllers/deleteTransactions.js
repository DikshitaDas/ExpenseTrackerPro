const mongoose = require("mongoose");
const validator = require("validator");


const deleteTransactions = async(req,res)=>{

    const usersModel = mongoose.model("users");
    const transactionsModel = mongoose.model("transactions");

    const {transaction_id} = req.params;

    if(!validator.isMongoId(transaction_id.toString())) throw "Please provide valid id !"


    const getTransactions = await transactionsModel.findOne({
        _id: transaction_id
    })

    if(!getTransactions) throw "Transaction not found!";


    console.log(getTransactions)


    // Adjust user's balance based on transaction type
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


    //delete the transaction
    await transactionsModel.deleteOne({
        _id : transaction_id
    })

    //respond with success
    res.status(200).json({
        status : "Success",
        message : "Deleted Successfully"
    })
}


module.exports = deleteTransactions;