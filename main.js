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

const ulIncomesList = document.getElementById('incomesList');
const incomesValueSpan = document.getElementById('incomesValue');

incomesValueSpan.textContent = totalIncomeSum;

// Expense elements
const expenseForm = document.getElementById('expenseForm');

const expensesList = document.getElementById('expensesList');
const expensesValueSpan = document.getElementById('expensesValue');

expensesValueSpan.textContent = totalIncomeSum;

// Income logic

/* A SAMPLE BUDGET LIST INCOME ITEM
<li class="flex flex--space-between budget__list__item">
    <p>Text input value <span>number input value</span> PLN</p>
    <div class="budget__list__item__buttons__wrapper">
        <button class="budget__list__item__button budget__list__item__button--edit">Edit</button>
        <button class="budget__list__item__button budget__list__item__button--delete">Delete</button>
    </div>
*/
const addNewIncome = () => {
  const incomeTitleValue = document.getElementById('incomeTitle').value;
  const incomeAmountValue = document.getElementById('incomeValue').value;

  if (!incomeAmountValue || !incomeTitleValue) return;

  // Create income list item
  const liNode = document.createElement('li');
  liNode.className = 'flex flex--space-between budget__list__item';

  const pNode = document.createElement('p');
  pNode.innerHTML = `${incomeTitleValue} <span>${incomeAmountValue}</span> PLN`;

  const divNode = document.createElement('div');
  divNode.className = 'budget__list__item__buttons__wrapper';

  const editButton = document.createElement('button');
  editButton.className =
    'budget__list__item__button budget__list__item__button--edit';
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.className =
    'budget__list__item__button budget__list__item__button--delete';
  deleteButton.textContent = 'Delete';

  divNode.appendChild(editButton);
  divNode.appendChild(deleteButton);

  liNode.appendChild(pNode);
  liNode.appendChild(divNode);

  ulIncomesList.appendChild(liNode);

  // Calculations
  totalIncomeSum = totalIncomeSum + parseInt(incomeAmountValue);
  totalPLN = totalPLN + parseInt(incomeAmountValue);

  incomesValueSpan.textContent = totalIncomeSum;
  budgetValueSpan.textContent = totalPLN;

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

  if (!expenseAmountValue) return;

  totalExpenseSum = totalExpenseSum - parseInt(expenseAmountValue);
  totalPLN = totalPLN - parseInt(expenseAmountValue);

  expensesValueSpan.textContent = totalExpenseSum;
  budgetValueSpan.textContent = totalPLN;

  console.log(expenseTitleValue);
  console.log(expenseAmountValue);
};
expenseForm.addEventListener('submit', (event) => {
  event.preventDefault();

  addNewExpense();
});
