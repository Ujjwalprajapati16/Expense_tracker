const incomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body;

    const income = incomeSchema({
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
        await income.save();
        res.status(201).json({message: "Success"});
    } catch(err) {
        console.error(err);
        return res.status(500).json({message: "Server Error"});
    }

    console.log(income);
};

exports.getIncomes = async (req, res) => {
    console.log(`reques on getIncomes`);
    try {
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: "Server Error"});
    }
}

exports.deleteIncome = async (req, res ) => {
    const {id} = req.params;
    incomeSchema.findByIdAndDelete(id)
        .then((income) => {
            if(!income) return res.status(404).json({message: "Income not found."});
            res.status(200).json({message: "Deleted successfully"});
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({message: "Server Error"});
        });
}