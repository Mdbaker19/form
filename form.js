$(document).ready(function (){

    $("#submit").on("click", function (){
       let password = $("#password1");
       let validateP = $("#password2");
        console.log(password.val());
        console.log(validateP.val());
        console.log(comparePasswords(password.val(), validateP.val()));
        let email = $("#email");
        console.log(validateEmail(email.val()));


    });

    function validateEmail(input){
        let com = input.substring(input.length -4);
        return (com === ".com" && input.includes("@"));
    }

    function comparePasswords(p1, p2){
        if(p1.length < 1){
            return false;
        }
        for(let i = 0; i < p1.length; i++){
            if(p1[i] !== p2[i]){
                return false;
            }
        }
        return true;
    }

});