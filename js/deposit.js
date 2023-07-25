

document.getElementById("deposit-btn").addEventListener("click", function(){
    const depositfield = document.getElementById("deposit-field");
    const newdepositAmount = parseFloat(depositfield.value);

    const depositTotal = document.getElementById("deposite-total");
    const previousdt = parseFloat(depositTotal.innerText);

    const currentDeposit = previousdt + newdepositAmount;
    depositTotal.innerText = currentDeposit;
    depositfield.value = '';

    const balanceTotal = document.getElementById("balance-total");
    const previousbalance = balanceTotal.innerText;
    const previousBalanceint = parseFloat(previousbalance);

    const currentBalanceTotal = previousBalanceint + newdepositAmount;
    balanceTotal.innerText = currentBalanceTotal;
    depositfield.value = '';
});




