// DEPENDENCIES
const express = require("express");
// const transaction = require("../models/transaction.js");

// MIDDLEWARE AND ROUTE
const transactionRoutes = express.Router();
const transactionsArr = require("../models/transaction.js");

// /transactions
transactionRoutes.get("/", (req, res) => {
  res.json(transactionsArr);
})

// /transactions/1
transactionRoutes.get("/:index", (req, res) => {
  const { index } = req.params;
  if(transactionsArr[index]) {
    res.json(transactionsArr[index]);
  } else {
    res.redirect("/*");
  }
});

// Updates
transactionRoutes.put("/:index", (req, res) => {
  const { index } = req.params
  transactionsArr[index] = req.body
  res.json(transactionsArr[index])
})

// /transactions
transactionRoutes.post("/", (req, res) => {
  transactionsArr.push(req.body);
  res.json(transactionsArr[transactionsArr.length-1]);
})

// DELETE
transactionRoutes.delete("/:index", (req, res) => {
  const { index } = req.params;
  if(transactionsArr[index]){
    let removed = transactionsArr.splice(index, 1);
    res.json(removed[0])
  } else {
    res.status(404).json({error: "Not found"});
  }
});

module.exports = transactionRoutes;