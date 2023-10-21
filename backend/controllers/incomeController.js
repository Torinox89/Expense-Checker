const incomeRouter = require("express").Router();

// Gets the list of all incomes
incomeRouter.get("/", async (req, res) => {
  const incomes = [
    {
      id: 1,
      source: "Primary Job",
      description: "PayCheck #1",
      recurring: true,
      amount: 1000.0,
      date: "10/01/2023",
    },
    {
      id: 2,
      source: "Primary Job",
      description: "PayCheck #2",
      recurring: true,
      amount: 1000.0,
      date: "10/16/2023",
    },
  ];

  res.json(incomes);
});

// Adds a new expense

// Gets an individual expense by id

// Route for updating an expense

// Route for deleting an expense

module.exports = incomeRouter;
