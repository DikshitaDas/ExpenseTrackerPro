require("express-async-errors") ;

const express = require("express");
const errorHandler = require("./handlers/errorHandler");
const cors = require("cors"); //Allows cross-origin requests: It enables servers to specify who (which domains) can access the resources.

const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./modules/users/users.routes");
const transactionsRoutes = require("./modules/transactions/transactions.routes");

require("dotenv").config();

app.use(express.json());
app.use(cors());


//connection to mongoose
mongoose.connect(process.env.mongo_connection,{})
.then(()=>{
    console.log("connected to mongoDB successfully");
}).catch((e)=>{
    console.log("connection failed:", e);
})

//Models initialization
require("./models/users.model");
require("./models/transactions.model");

//user routes
app.use("/api/users", userRoutes);
app.use("/api/transactions", transactionsRoutes);


//404 error for all invalid url
app.all("*", (req,res,next)=> {
    res.status(404).json({
        status:"failed",
        message:"Not Found"
    })
    return;
})




//end of all routes
app.use(errorHandler);


app.listen(8000, () => {
    console.log("server running successfully")
})

