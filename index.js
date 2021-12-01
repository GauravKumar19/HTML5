
    function validateFirstName() {
        if (document.regform.fname.value == "");
        document.getElementById("fnameError").innerHTML = "*First Name Cannot be Blank";

        var regexp = /^[a-zA-Z]+$/; //start & end with alphabets   
                 
        if (regexp.test(document.regform.fname.value)) {
            document.getElementById("fname").
                style.backgroundColor = "yellow";
        }

        else {
            document.getElementById("fname").
                style.backgroundColor = "red";
            document.getElementById("fnameError").innerHTML = "*Invalid First Name";
        }

    }
    function clearMessage() {
        document.getElementById("fnameError").innerHTML = "";
    }

    function validateUserName(){
    var unameregexp=/^[a-zA-Z0-9_]+$/; //start with alphabets end with 0-9 or _

    if(unameregexp.test(document.regform.uname.value))

    {
        document.getElementById("uname").
        style.backgroundColor="yellow";
    }
    else
    {
        document.getElementById("uname").
        style.backgroundColor="red";
        document.getElementById("unameError").innerHTML="*Invalid User Name"

    }

}

function clearMessage2()
{
    document.getElementById("unameError").innerHTML="";

}


function clearMessage3()        {    
            document.getElementById("pwdError").innerHTML="";      
  }       

function validatePassword()       
 {            //To check a password between 7 to 16 characters which            
     //contain only characters, numeric digits, underscore and           
       //first character must be a letter          
       // \w matches any word character (alphanumeric) including            
      //the underscore (equivalent to [A-Za-z0-9_]).            
      var passregexp=/^[A-Za-z]\w{7,15}$/;            
       if(passregexp.test(document.regform.pass.value))            
       {                document.getElementById("pass").style.backgroundColor="yellow";           
     }            
     else          
       {            
             document.getElementById("pass").style.backgroundColor="red";        
                 document.getElementById("pwdError").innerHTML=               
          "*Invalid Password"            }       
         }

         onblur="validatePassword()"

                    onfocus="clearMessage3()";

                    <span id="pwdError" style="color: red;">

                    </span>


                   
 function matchPassword()        {    
    
            var pass=document.regform.pass.value;      
          var cpass=document.regform.cpass.value;      
          if(pass !=cpass)            {              
          document.getElementById("cpwdError").innerHTML=     
                   "*Password and Confirm Password doesnot Match" ;            }    
            }       
        
        function clearMessage4()       {   
                 document.getElementById("cpwdError").innerHTML="";   
                }

 onblur="matchPassword()";                   
 onfocus="clearMessage4()"  ;                 
<span id="cpwdError" style="color: red;">                    </span>




