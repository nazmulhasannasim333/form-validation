document.getElementById('submit-btn').addEventListener('click', function(){
    // Input field Validation
    const nameField = document.getElementById('name-field');
    const emailField = document.getElementById('email-field');
    const psw1Field = document.getElementById('psw1-field');
    const psw2Field = document.getElementById('psw2-field');

    // Error Massage Show
    const nameErrMsg =  document.getElementById('nameMsg');
    const emailErrMsg =  document.getElementById('emailMsg');
    const psw1ErrMsg =document.getElementById('pswMsg');
    const psw2ErrMsg =document.getElementById('pawRepeatMsg');

    // Acoount succes massage
    const display = document.getElementById('display-success');

    // Check validation, Condition...
    if(nameField.value == ''){
        nameErrMsg.innerText = 'Please Fill The Name*';
    }else if(!isNaN(nameField.value)){
        nameErrMsg.innerText = 'Only Characters are allowed*';
    }else{
        nameErrMsg.innerText = '';
      }

    if(emailField.value == ''){
        emailErrMsg.innerText = 'Please Fill The Email*';
      }else if(!isNaN(emailField.value)){
        emailErrMsg.innerText = 'Only Characters are allowed*';
      }else{
        emailErrMsg.innerText = '';
      }


     if(psw1Field.value === ''){
        psw1ErrMsg.innerText = 'Enter the password please!*';
      }else if(psw1Field.value.length < 8){
        psw1ErrMsg.innerText = 'Password length must be atleast 8 characters*';
      } else if(psw1Field.value.length > 15){
        psw1ErrMsg.innerText = 'Password length must not exceed 15 characters*';
      }else{
        psw1ErrMsg.innerText = '';
      }

      if(psw2Field.value === ''){
        psw2ErrMsg.innerText = 'Enter the confirm password*';
      }

      if(psw1Field.value !== psw2Field.value){
        psw2ErrMsg.innerText = 'Passwords are not same*';
      } 

      if(typeof nameField.value === 'string' && typeof emailField.value === 'string' && typeof psw1Field.value === 'string' && typeof psw2Field.value === 'string'){
        display.innerText = 'Account created has been succesful';
        
      }
      
})
