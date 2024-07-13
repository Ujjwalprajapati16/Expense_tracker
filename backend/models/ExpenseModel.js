const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLenght: 50,
    },
    amount: {
      type: Number,
      required: true,
      maxLenght: 20,
      trim: true,
    },
    type: {
      type: String,
      default: "incomes",
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxLenght: 20,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", ExpenseSchema);
