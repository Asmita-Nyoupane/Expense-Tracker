const router = require("express").Router();
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../Controllers/ExpenseController");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../Controllers/IncomeContoller");

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpenses)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
