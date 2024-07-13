const { addExpense, getExpense, deleteExpense } = require('../controllers/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-incomes/:id', deleteIncome)
    .post('/add-expense', addExpense)
    .get('/get-expense', getExpense)
    .delete('/delete-expense', deleteExpense);
    
module.exports = router;