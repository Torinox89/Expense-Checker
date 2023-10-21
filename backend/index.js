// Require needed modules.
const express = require("express");
const cors = require("cors");

// Initialize the app
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Create a homepage route.
app.get("/", function (req, res) {
  res.send("Backend for Budget Buddy");
});

// Group Members
app.get("/members", function (req, res) {
  const group_members = [
    { name: "Adrian Mitre" },
    { name: "David Aguirre" },
    { name: "Eshita Islam" },
    { name: "Marisol Valenzuela" },
    { name: "Serena Ally" },
  ];

  res.json(group_members);
});

// Listen for connections.
app.listen(process.env.PORT, function () {
  console.log("Backend server is running");
});
