const express = require("express");
const auth = require("../../middleware/auth");
const addIncome = require("./controllers/addIncome");
const addExpense = require("./controllers/addExpense");
const getTransactions = require("./controllers/getTransactions");
const deleteTransactions= require("./controllers/deleteTransactions");
const editTransactions = require("./controllers/editTransactions");

const transactionsRoutes = express.Router(); 



transactionsRoutes.use(auth); //authentication middleware
//everyline below this will be controlled by authentication middleware

//protected routes
transactionsRoutes.post("/addIncome", addIncome);
transactionsRoutes.post("/addExpense", addExpense);
transactionsRoutes.get("/", getTransactions);

transactionsRoutes.delete("/:transaction_id", deleteTransactions);
transactionsRoutes.patch("/", editTransactions);

module.exports = transactionsRoutes;