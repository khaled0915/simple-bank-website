// console.log('ajsj')

// step-01 : add event listener to deposit button

document.getElementById('btn-deposit').addEventListener('click' , function(){
      
    // step-02 : get the deposit amount from the deosit input field

    const depositField = document.getElementById('Deposit-field');
    const NewDepositAmountString = depositField.value ;
    const NewDepositAmount = parseFloat(NewDepositAmountString);
    // console.log(depositAmount);

    // step-03 : get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-04 : add numbers to set the total 

    const currentDepositTotal = previousDepositTotal + NewDepositAmount;
    
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // step-05 : get balance current total 
    const balanceTotalElement = document.getElementById('balane-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-06 : calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + NewDepositAmount ;


    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;











    // step - : clear the deposit field

    depositField.value = ' ';


})