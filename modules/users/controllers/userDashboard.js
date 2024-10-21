const mongoose = require("mongoose");

const userDashboard = async (req,res) => {


    const usersModel = mongoose.model("users");
    const transactionsModel = mongoose.model("transactions");

    const getUser = await usersModel.findOne({
        _id : req.user._id
    }).select("-password") //only display name balance and email, hided critical information like password

    const transactions = await transactionsModel.find({
        user_id : req.user._id,
    }).sort("-createdAt") //data sorted into decending order
    .limit(2); //only show recently added two data


    console.log(req.user);

    res.status(200).json({
        status: "success",
        data : getUser,
        transactions // equivalent to transactions : transactions
    })

}

module.exports = userDashboard;