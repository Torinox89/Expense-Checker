// Require needed modules.
const express = require("express");

// Initialize the app object.
const app = express();

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Backend for Expense Checker");
});

// Listen for connections.
app.listen(3000, function () {
  console.log("Backend server is running");
});
