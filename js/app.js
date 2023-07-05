const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');
const usernameErrorValue = document.getElementById('error');
const usernameErrorValue2 = document.querySelector('#error2');


inputUsername.addEventListener('input', (e) =>{
    e.preventDefault();
    let pattern = /^[\w]{6,8}$/;
    let currentValue = e.target.value;
    let valid = pattern.test(currentValue);
    
   
 
    if(valid){
        usernameErrorValue.style.display = 'none';
    }
    else{
        usernameErrorValue.style.display = 'block';

    }

});



inputPassword.addEventListener('input', (e) =>{
    e.preventDefault();

    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    let currentValue2 = e.target.value;

    let valid2 = currentValue2.match(strongRegex);


    if(valid2){
        usernameErrorValue2.style.display = 'none';
    }
    else{
        usernameErrorValue2.style.display = 'block';

    }
});


