const form = document.getElementById("signform");
console.log(form);
 form.addEventListener('submit',function(event){
    if(!validate()||!validatepwd()||!validatephno()){
        event.preventDefault();

    }
  })
    
    let email1 = document.getElementById("inputEmail4");
    let pwd = document.getElementById("inputPassword4");
    let phone = document.getElementById("inputAddress");
   // pwd.onkeyup = testPassword();
 function validate()
  {
    let regexp =/^([\w\.-]+)@([\w\-])+.([a-z]{2,3})(.[a-z]{2,3})?$/;
  
    if(regexp.test(email1.value))
    {
        error.innerHTML ="valid";
        error.style.color ="green";
        return true;
    }
    else
    {
        error.innerHTML ="Enter email in valid format aaa@xxx.com";
        error.style.color ="red";
        return false;
    }
    
    
  }

  function validatepwd()
  {
    let regpwd =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(regpwd.test(pwd.value))
    {
        error1.innerHTML ="valid";
        error1.style.color ="green";
        return true;
    }
    else
    {
        error1.innerHTML ="Enter  valid 8 digit password ";
        error1.style.color ="red";
        return false;
    }
    
    
  }

  function validatephno()
  {
    let phoneno = /^\(?([0-9]{3})\)?[-/s/. ]?([0-9]{3})[-/s/. ]?([0-9]{4})$/;
    if(phoneno.test(phone.value))
    {
      error2.innerHTML ="valid";
      error2.style.color ="green";
      return true;
  }
  else
  {
      error2.innerHTML ="Enter  valid phone number ";
      error2.style.color ="red";
      return false;
  }
  
  }

  function testPassword() {
    var strength = 0;

    strength += /[A-Z]+/.test(pwd.value) ? 1 : 0;
    strength += /[a-z]+/.test(pwd.value) ? 1 : 0;
    strength += /[0-9]+/.test(pwd.value) ? 1 : 0;
   // strength += /[\W]+/.test(pwd.value) ? 1 : 0;

    switch(strength) {
        case 2:
          pwd_strength.innerHTML ="Medium";
          pwd_strength.style.color ="orange";
            break;
        case 3:
            // it's strong!
            pwd_strength.innerHTML ="Strong";
            pwd_strength.style.color ="green";
          
            break;
        default:
          pwd_strength.innerHTML ="weak";
          pwd_strength.style.color ="red";
           // it's weak!
            break;
    }
}