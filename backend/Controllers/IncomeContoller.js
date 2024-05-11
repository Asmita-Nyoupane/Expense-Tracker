const Income = require("../Models/IncomeModel");
const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;
  try {
    const income = Income({
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
    await income.save();
    return res.status(200).json({ msg: "new income added" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    const income = await Income.findById(id);
    if (!income) {
      return res.status(400).json({ msg: "No income found " });
    }
    await Income.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Income deleted " });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = { addIncome, getIncomes, deleteIncome };
