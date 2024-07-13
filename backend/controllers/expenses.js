const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const Expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try{
        if(!title || !amount || !category || !description || !date) {
            return res.status(400).json({message: "All fields are required."});
        }

        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: "Invalid amount."});
        }
        await Expense.save();
        res.status(201).json({message: "Success"});
    } catch(err) {
        console.error(err);
        return res.status(500).json({message: "Server Error"});
    }

    console.log(Expense);
};

exports.getExpense = async (req, res) => {
    console.log(`reques on getExpense`);
    try {
        const Expense = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(Expense);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

exports.deleteExpense = async (req, res ) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            if(!income) return res.status(404).json({message: "Expense not found."});
            res.status(200).json({message: "Deleted successfully"});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({message: "Server Error"});
        });
}