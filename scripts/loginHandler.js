var curUser = null;
var loggedIn = false;

function validateLogin() {
    let validEmail = false;
    let validPassword = false;
    let emailRGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    //check email
    let email = document.getElementById('emailInput');
    validEmail = emailRGEX.test(email.value);
    console.log(email);
    console.log("validEmail:" + validEmail);
    //check password
    let password = document.getElementById('passwordInput');
    validPassword = passwordRGEX.test(password.value);
    console.log("validPassword:" + validPassword);
    document.getElementById('loginFormButton').classList.add("fas", 'fa-spinner', 'fa-spin');

    setTimeout(() => {
        document.getElementById('loginFormButton').classList.remove("fas", 'fa-spinner', 'fa-spin');

        //validEmail = true;
        //validPassword = true;

        //alert if wrong
        if (validEmail && validPassword) {
            //move to next page
            //alert("move to next page");
            console.log("move to next page");
            //add spinner for no reason


            document.getElementById('loginPageDiv').style.display = 'none';
            loggedIn = true;
            curUser = email.value;
            email.value = "";
            password.value = "";
            document.getElementById('bottomBar').style.display = 'block';
            document.getElementById('menuBtn').disabled = false;
            document.getElementById('dataTableDiv').style.display = 'block';
        }
        else if (validEmail && !validPassword) {
            //incorrect password
            alert("password is too weak.");
        }
        else if (!validEmail && validPassword) {
            //incorrect email
            alert("email is not valid.")
        }
        else {
            //both are wrong
            alert("email is not valid and password is too weak");
        }
    }, 2000);
}

function logout() {
    curUser = null;
    loggedIn = false;
    document.getElementById('bottomBar').style.display = 'none';
    document.getElementById('menuBtn').disabled = true;
    document.getElementById('sideMenu').style.width = "0px"; 
    var hideOnStartUp = document.getElementsByClassName("hideOnStartUp");
    for (i = 0; i < hideOnStartUp.length; i++) {
        hideOnStartUp[i]['style']['display'] = "none";
    }
    document.getElementById('loginPageDiv').style.display = 'block';
    document.getElementsByClassName('bottombar')[0].style.display = 'none';

}