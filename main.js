// Selecting elements

let remainingMoney = 0;

// Budget elements
const budgetValueSpan = document.getElementById('budgetValue');
const budgetStateDiv = document.getElementById('budgetState');

// Income elements
const incomeForm = document.getElementById('incomeForm');
const incomeTitleValue = document.getElementById('incomeTitle').value;
const incomeAmountValue = document.getElementById('incomeValue').value;

const incomesList = document.getElementById('incomesList');
const incomesValueSpan = document.getElementById('incomesValue');

// Expense elements
const expenseForm = document.getElementById('expenseForm');
const expenseTitleValue = document.getElementById('expenseTitle').value;
const expenseAmountValue = document.getElementById('incomeValue').value;

const expensesList = document.getElementById('expensesList');
const expensesValueSpan = document.getElementById('expensesValue');

// Income logic

const addNewIncome = () => {};

incomeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewIncome();
});
