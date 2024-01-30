document.getElementById('btn-save').addEventListener('click', function () {
    const incomeAmount = getInputFieldValueById('income-field');
    const percentageAmount = getInputFieldValueById('percentage-filed');

    // calculate percentage amount and deduct from income
    const currentSavingAmount = (percentageAmount * incomeAmount) / 100;
    const savingAmount = getTextElementValueById('savingAmount');
    setTextElementValueById('savingAmount', currentSavingAmount);

    const currentBalance = getTextElementValueById('currentBalance');
    const finalBalance = currentBalance - currentSavingAmount;

    const remainingBalance = getTextElementValueById('remainingAmount');
    setTextElementValueById('remainingAmount', finalBalance);
})
