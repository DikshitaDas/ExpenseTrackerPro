const mongoose = require("mongoose");

const getTransactions = async (req, res) =>{

    const transactionsModel = mongoose.model("transactions");

    const transactions = await transactionsModel.find({
        user_id : req.user._id,
        ...req.query //spread operator (...) :the spread operator is used to copy all the key-value pairs from req.query (which contains the query string parameters) into another object or to pass them as individual arguments in function calls.
    })

//in Express.js, query string parameters are part of the URL that come after the ? and are used to pass data to the server in a key-value format.

    console.log(req.query); //{ transaction_type: 'income' }


    res.status(200).json({
        status:"Success",
        data : transactions
    })
}
module.exports = getTransactions;