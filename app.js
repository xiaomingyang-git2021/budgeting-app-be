// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

app.use(express.json());
app.use(cors());

const transactionsController = require("./controllers/transactionsController.js");

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the budgeting app ")
});

app.use("/transactions", transactionsController);

// app get("/transactions", (req, res) => {
//   res.json(transactions);
// })

// app.get("/transactions/:index", (req, res) => {
//   const { index } = req.params
//   if(transactions[index]) {
//     res.json(transactions[index]);
//   } else {
//     res.status(404).json({message: "Log not found"});
//   }
// })

// const transactionsController = require("./controllers/transactionsController.js");
// app.use("/transactions", transactionsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).json({ error: "Page not found" });
})

// EXPORT
module.exports = app;