// Variables
let totalPLN = 0;
let totalIncomeSum = 0;
let totalExpenseSum = 0;

// Selecting elements

// Budget elements
const budgetValueSpan = document.getElementById('budgetValue');
const budgetStateDiv = document.getElementById('budgetState');

budgetValueSpan.textContent = totalPLN;

// Income elements
const incomeForm = document.getElementById('incomeForm');

const incomesList = document.getElementById('incomesList');
const incomesValueSpan = document.getElementById('incomesValue');

incomesValueSpan.textContent = totalIncomeSum;

// Expense elements
const expenseForm = document.getElementById('expenseForm');

const expensesList = document.getElementById('expensesList');
const expensesValueSpan = document.getElementById('expensesValue');

expensesValueSpan.textContent = totalIncomeSum;

// Income logic

const addNewIncome = () => {
  const incomeTitleValue = document.getElementById('incomeTitle').value;
  const incomeAmountValue = document.getElementById('incomeValue').value;

  incomesValueSpan.textContent = incomeAmountValue;

  console.log(incomeTitleValue);
  console.log(incomeAmountValue);
};

incomeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewIncome();
});

// Expense logic
const addNewExpense = () => {
  const expenseTitleValue = document.getElementById('expenseTitle').value;
  const expenseAmountValue = document.getElementById('expenseValue').value;

  console.log(expenseTitleValue);
  console.log(expenseAmountValue);
};
expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewExpense();
});
