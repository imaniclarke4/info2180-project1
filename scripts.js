/* Add your JavaScript to this file */
"use strict";

window.onload= function(){
var submit = document.getElementsByTagName("button")[0];
var email = document.getElementById("email");
var message = document.getElementsByClassName("message")[0];


submit.addEventListener('click', email_added);

function email_added(e){
    var emailval = email.value;
    e.preventDefault();
    message.innerHTML= `Thank you! Your email address ${emailval} has been added to our mailing list!`;
    console.log("submitted");
}

submit.addEventListener('click',no_email );
function no_email(e) {
    var emailval = email.value;
    e.preventDefault();
    if (emailval.length==0){
        message.innerHTML= `Please enter a valid email address!`;
        console.log("No email was submitted");
    }
    
}

}

