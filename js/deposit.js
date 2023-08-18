// console.log('ajsj')

// step-01 : add event listener to deposit button

document.getElementById('btn-deposit').addEventListener('click' , function(){
      
    // step-02 : get the deposit amount from the deosit input field

    const depositField = document.getElementById('Deposit-field');
    const depositAmount = depositField.value ;
    // console.log(depositAmount);

    // step-03 : get the current deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;


})