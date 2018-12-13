export default expenseArray => 
    expenseArray.reduce((total, expense) => total + expense.amount, 0)