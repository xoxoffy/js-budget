// Variables
let totalPLN = 0;
let totalIncomeSum = 0;
let totalExpenseSum = 0;

// Selecting elements

// Budget elements
const budgetValueSpan = document.getElementById('budgetValue');
const budgetStateDiv = document.getElementById('budgetState');
const budgetStateText = document.getElementById('budgetStateText');

budgetValueSpan.textContent = totalPLN;

// Income elements
const incomeForm = document.getElementById('incomeForm');

const ulIncomesList = document.getElementById('incomesList');
const incomesValueSpan = document.getElementById('incomesValue');

incomesValueSpan.textContent = totalIncomeSum;

// Expense elements
const expenseForm = document.getElementById('expenseForm');

const ulExpensesList = document.getElementById('expensesList');
const expensesValueSpan = document.getElementById('expensesValue');

expensesValueSpan.textContent = totalIncomeSum;

// Helper functions

const addListItem = (titleValue, amountValue, listType) => {
  const liNode = document.createElement('li');
  liNode.className = 'flex flex--space-between budget__list__item';

  const pNode = document.createElement('p');

  const pId = Math.random().toString(16).slice(2);
  pNode.id = pId;
  pNode.innerHTML = `${titleValue} <span>${amountValue}</span> PLN`;

  const divNode = document.createElement('div');
  divNode.className = 'budget__list__item__buttons__wrapper';

  const editButton = document.createElement('button');
  editButton.className =
    'budget__list__item__button budget__list__item__button--edit';
  editButton.textContent = 'Edit';

  //   editButton.onclick = () => {
  //     const newIncomeTitleValue = document.getElementById('incomeTitle').value;
  //     const newIncomeAmountValue = document.getElementById('incomeValue').value;

  //     if (pNode.id === pId) {
  //       pNode.innerHTML = `${newIncomeTitleValue} <span>${newIncomeAmountValue} PLN`;
  //     }

  //     amountValue = parseInt(newIncomeAmountValue);

  //     totalIncomeSum = amountValue;
  //     totalPLN = amountValue;
  //     incomesValueSpan.textContent = totalIncomeSum;
  //     budgetValueSpan.textContent = totalPLN;
  //   };

  const deleteButton = document.createElement('button');
  deleteButton.className =
    'budget__list__item__button budget__list__item__button--delete';
  deleteButton.textContent = 'Delete';

  deleteButton.onclick = () => {
    if (pNode.id === pId && listType === ulIncomesList) {
      liNode.remove();
      totalIncomeSum = totalIncomeSum - amountValue;
      totalPLN = totalPLN - amountValue;
      incomesValueSpan.textContent = totalIncomeSum;
      budgetValueSpan.textContent = totalPLN;
    } else if (pNode.id === pId && listType === ulExpensesList) {
      liNode.remove();
      totalExpenseSum = totalExpenseSum + parseInt(amountValue);
      totalPLN = totalPLN + parseInt(amountValue);
      expensesValueSpan.textContent = Math.abs(totalExpenseSum);
      budgetValueSpan.textContent = totalPLN;
    }
    budgetCheck();
  };

  divNode.appendChild(editButton);
  divNode.appendChild(deleteButton);

  liNode.appendChild(pNode);
  liNode.appendChild(divNode);

  listType.appendChild(liNode);
};

const budgetCheck = () => {
  if (totalPLN === 0) {
    budgetStateDiv.className = 'budget__state budget__state--warning';
    budgetStateText.textContent = `Your balance is zero.`;
  } else if (totalPLN < 0) {
    budgetStateDiv.className = 'budget__state budget__state--danger';
    budgetStateText.textContent = `You are on the negative balance by ${Math.abs(
      totalPLN
    )} PLN!`;
  } else {
    budgetStateDiv.className = 'budget__state budget__state--success';
    budgetStateText.textContent = `You can still spend ${totalPLN} PLN`;
  }
};

// Income logic
const addNewIncome = () => {
  const incomeTitleValue = document.getElementById('incomeTitle').value;
  const incomeAmountValue = document.getElementById('incomeValue').value;

  if (!incomeAmountValue || !incomeTitleValue) return;

  // Calculations
  totalIncomeSum = totalIncomeSum + parseInt(incomeAmountValue);
  totalPLN = totalPLN + parseInt(incomeAmountValue);

  incomesValueSpan.textContent = totalIncomeSum;
  budgetValueSpan.textContent = totalPLN;

  addListItem(incomeTitleValue, incomeAmountValue, ulIncomesList);
};

incomeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewIncome();
  budgetCheck();
});

// Expense logic
const addNewExpense = () => {
  const expenseTitleValue = document.getElementById('expenseTitle').value;
  const expenseAmountValue = document.getElementById('expenseValue').value;

  if (!expenseAmountValue || !expenseTitleValue) return;

  totalExpenseSum = totalExpenseSum - parseInt(expenseAmountValue);
  totalPLN = totalPLN - parseInt(expenseAmountValue);

  expensesValueSpan.textContent = Math.abs(totalExpenseSum);
  budgetValueSpan.textContent = totalPLN;

  addListItem(expenseTitleValue, expenseAmountValue, ulExpensesList);
};
expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewExpense();
  budgetCheck();
});
