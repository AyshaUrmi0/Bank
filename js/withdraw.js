
  

document.getElementById("withdraw-btn").addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

   // console.log(newWithdrawAmount);

    withdrawField.value = '';


    if(isNaN(newWithdrawAmount)){
        alert("not a number");
        return;
    }

   // console.log("newWithdrawAmount:", newWithdrawAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //console.log("previousWithdrawTotal:", previousWithdrawTotal);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    console.log("currentWithdrawTotal:", currentWithdrawTotal);                                                                                 

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotal = document.getElementById("balance-total");
    const previousBalance = balanceTotal.innerText;
    const previousBalanceInt = parseFloat(previousBalance);


   

    if(newWithdrawAmount> previousBalanceInt)
    {
        alert('baper bank e eto taka nai');
        return;

    }

    //console.log("previousBalanceInt:", previousBalanceInt);

    const newBalanceTotal = previousBalanceInt - newWithdrawAmount; // Assuming it's a withdrawal (change + to - if it's a deposit)

   // console.log("newBalanceTotal:", newBalanceTotal);

    balanceTotal.innerText = newBalanceTotal;

   
});
