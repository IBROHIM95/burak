console.log("Signup frontend javascript file");

$(function(){  })


function validateSignupForm() {
    const memberNick = $('.member-nick').val();
    const memberPhone = $('.member-phone').val();
    const memberPassword = $('.member-password').val();
    const ConfirmPassword = $('.confirm-password').val();

    if(
        memberNick === "" ||  
        memberPhone === "" ||  
        memberPassword === "" ||  
        ConfirmPassword === ""  
    ){
        alert('Please insert all required inputs');
        return false
    }memberPassword !== ConfirmPassword
    
    if (memberPassword !== ConfirmPassword) {
        alert('Password differs, please check');
        return false
    }
    return false
}