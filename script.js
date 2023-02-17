let email=document.querySelector("#email")
let password=document.getElementById("password")
let confirmPassword=document.getElementById("cpassword")
let but=document.getElementById("mainbutton");
let p=0;
let em=0;




but.addEventListener('click', (e) => {

    if(p&&em)
        location.reload();
    
    

})
email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.reportValidity();
        email.style.borderColor="red";
        em=0;
    }
    else if(!email.validity.typeMismatch)
    {
        email.style.borderColor="green";
        em=1;

    }
})

confirmPassword.addEventListener('input', (e)=>
{
   
    if(confirmPassword.value!=password.value)
    {
        confirmPassword.setCustomValidity("Passwords do not match");
        password.setCustomValidity("Passwords do not match");
        password.style.borderColor="red";
        confirmPassword.style.borderColor="red";
        confirmPassword.reportValidity();
        p=0;
    }
    else if(confirmPassword.value==password.value)
    {
        confirmPassword.setCustomValidity("");
        password.style.borderColor="green";
        confirmPassword.style.borderColor="green";
        password.setCustomValidity("");
        p=1;
    }
})

password.addEventListener('input', (e)=>
{
   
    if(password.value!=confirmPassword.value)
    {
        confirmPassword.setCustomValidity("Passwords do not match");
        password.setCustomValidity("Passwords do not match");
        password.style.borderColor="red";
        confirmPassword.style.borderColor="red";
        password.reportValidity();
        p=0;
    }
    else if(confirmPassword.value==password.value)
    {
        confirmPassword.setCustomValidity("");
        password.style.borderColor="green";
        confirmPassword.style.borderColor="green";
        password.setCustomValidity("");
        p=1;
    }
})



