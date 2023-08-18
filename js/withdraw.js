/*

1.add event handler with the withdraw button
2.get the amount from the withdraw input field
2.5. also make sure to convert the input into a number by using parsefloat
3.get previous withdraw total

4.calculate withdraw amount
4.5. set total withdraw amount

5.get the previous balance total

6.calculate new balance total
6.5 set the new balance total


7. clear the input field




*/

// step- 01 :
document.getElementById('btn-withdraw').addEventListener('click' , function(){
    // console.log('click')

// step-02 :

const withdrawField = document.getElementById('Withdraw-field');
const newWithdrawAmountString = withdrawField.value ;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// console.log(WithdrawAmount);


// step-03:

const WithdrawTotalElement = document.getElementById('withdraw-total');
const  previousWithdrawTotalElementString = WithdrawTotalElement.innerText ;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalElementString);
// console.log(previousWithdrawTotal);


// step-04 :

const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;


// step-05
WithdrawTotalElement.innerText = currentWithdrawTotal;


// step -06 

const balanceTotalElement= document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
console.log(previousBalanceTotal); 

const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;
// step-07

withdrawField.value ='';




})