

document.getElementById('btn-calculate').addEventListener('click', function () {
    const incomeAmount = getInputFieldValueById('income-field');
    const foodAmount = getInputFieldValueById('food-field');
    const rentAmount = getInputFieldValueById('rent-field');
    const clothAmount = getInputFieldValueById('cloth-field');

    // Total expense amount
    const sumOfExpense = foodAmount + rentAmount + clothAmount;
    const balanceAmount = incomeAmount - sumOfExpense;

    const totalExpense = getTextElementValueById('total-expense-amount');

    setTextElementValueById('total-expense-amount', sumOfExpense);

    setTextElementValueById('currentBalance', balanceAmount);

    // console.log(x);
})