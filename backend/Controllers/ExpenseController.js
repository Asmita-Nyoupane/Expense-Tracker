const Expense = require("../Models/ExpenseModel");
const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  try {
    const expense = Expense({
      title,
      amount,
      category,
      description,
      date,
    });
    if (!title || !category || !description || !amount || !date) {
      return res.status(400).json("All field are required");
    }
    if (amount <= 0 || !amount === "number") {
      return res.status(400).json("Amount must be number greater than 0");
    }
    await expense.save();
    return res.status(200).json({ msg: "new Expense added" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 });
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const expense = await Expense.findById(id);
    if (!expense) {
      return res.status(400).json({ msg: "No Expense found " });
    }
    await expense.deleteOne();
    return res.status(200).json({ msg: "Expense deleted " });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = { addExpense, getExpenses, deleteExpense };
