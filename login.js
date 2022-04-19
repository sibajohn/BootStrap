const form = document.getElementById("login");
console.log(form);
 form.addEventListener('submit',function(event){
    if(!validate()||!validatepwd()){
        event.preventDefault();

    }
  })
 
    let email1 = document.getElementById("exampleInputEmail1");
    let pwd = document.getElementById("exampleInputPassword1");
       
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
        error1.innerHTML ="Enter  valid password ";
        error1.style.color ="red";
        return false;
    }
    
    
  }
 