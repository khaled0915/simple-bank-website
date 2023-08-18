//step-01 : add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click' , function(){
    // console.log('clicked')
    // step-02: get the email address inside the email input field
    // 2.a: set the id in the html element
    // 2.b: get the element
    // 2.c: get the value from the element
       
    // for email field
    const userMail = document.getElementById('user-email');
    const email = userMail.value ;
    // console.log(EmailField);


    // for password field

    const UserPass = document.getElementById('user-password');
    const password = UserPass.value ;


    // danger : Do not verify email password on the client side
    // step-4 : verify mail and password and check wheather valid or invalid user

    if(email === 'bapper@bank.com'  && password === 'bank'){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }



})