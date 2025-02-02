const email = document.getElementById("email");
const password = document.getElementById("password"); 
const form = document.getElementById("form");
const msg = document.getElementById("msg");



const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const validatePassword = (inputPassword) => inputPassword.value.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/);

const generateError = (errorName, errorMsg) =>{
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    if(errorName == "email"){
        emailError.innerText = errorMsg;    
    }else if(errorName == "password"){
        passwordError.innerText = errorMsg;
    }
}


const formValidate = (inputEmail, inputPassword) =>{

    // if(!validateEmail(inputEmail)){
    //     emailError = "please enter a valid email address";
    //     generateError("email",emailError);
    //     return;
    // }
    // if(!validatePassword(inputPassword)){
    //     passwordError = "please enter correct password";
    //     generateError(generateError("password",passwordError));
    //     return;
    // }
  
    if(inputEmail == ""){
        emailError = "email is required";
        generateError("email",emailError);
        return;
    }
    else{

    }
    if(inputPassword == ""){
        passwordError = "password is required";
        generateError(generateError("password",passwordError));
        return;
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
});

email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){
        email.style.borderColor = "red";
        generateError("email", "email is required");
        email.parentElement.classList.add("error");
    }
});

password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password)){
        password.style.borderColor = "red";
        generateError("password", "Password is required");
        password.parentElement.classList.add("error");
    }
});

const togglePassword = document.querySelector('#togglePassword');
  const password1 = document.querySelector('#password');

  togglePassword.addEventListener('click', function (e) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});