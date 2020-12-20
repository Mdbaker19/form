$(document).ready(function (){

    let errors = $("#outputSpot");
    const passwordMessage = "Password invalid or does not match";
    const emailMessage = "Not a valid email address";
    const nameMessage = "Please enter a name";
    let count = 0;
    $("#submit").on("click", function (){
        let password = $("#password1");
        let validateP = $("#password2");
        let email = $("#email");
        let name = $("#name");
        if(!comparePasswords(password.val(), validateP.val())) {
            errors.text(passwordMessage);
            count++;
        }
        if(!validateEmail(email.val())) {
            errors.text(emailMessage);
            count++;
        }
        if(name.val().length < 1) {
            errors.text(nameMessage);
            count++;
        }
        if(count === 0){
            errors.text(`${name.val()} Successfully logged in`);
        }
    });

    function validateEmail(input){
        let com = input.substring(input.length -4);
        return ((com === ".com" || com === ".org") && input.includes("@"));
        //add other .somethings to this
    }

    function comparePasswords(p1, p2){
        if(p1.length < 1 || p2.length < 1){
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