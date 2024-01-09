function showpass() {
  var x = document.getElementById("showPass");
  var y = document.getElementById("eyeshow");
  if (x.type === "password") {
    x.type = "text";
    y.src = "view.png";
  } else {
    x.type = "password";
    y.src = "hide.png";
  }
}

document.getElementById("Financialhead").addEventListener("click", function () {
  window.location.href = "HomePage.html";
});
var fullname = document.getElementById("fullname");

fullname.addEventListener("input", fullNameFunction);

function fullNameFunction() {
  var Usernamechecker = /^[A-Za-z\s]+$/;
  if (
    Usernamechecker.test(fullname.value) &&
    fullname.value.trim().length > 3 &&
    fullname.value.trim().length < 20
  ) {
    fullname.style.border = "4px solid green";
    document.getElementById("fullNInfo").innerHTML = "Valied";
    document.getElementById("fullNInfo").style.color = "#4de84d";
  } else if (Usernamechecker.test(fullname.value) == false) {
    document.getElementById("fullNInfo").innerHTML = "Only Using for Alphabets";
    document.getElementById("fullNInfo").style.color = "red";
  } else {
    fullname.style.border = "4px solid red"; // Set the default border color
    document.getElementById("fullNInfo").innerHTML = "Need min 3 charactor";
    document.getElementById("fullNInfo").style.color = "red";
  }
}

var Uname = document.getElementById("Uname");
Uname.addEventListener("input", UnameFunction);
function UnameFunction() {
  var Usernamechecker = /^[A-Za-z]+$/;

  if (Usernamechecker.test(Uname.value) && Uname.value.trim().length >= 3) {
    fullname.style.border = "4px solid green";
    document.getElementById("unameInfo").innerHTML = "Valied";
    document.getElementById("unameInfo").style.color = "#4de84d";
  } else {
    Uname.style.border = "4px solid red";
    document.getElementById("unameInfo").style.color = "red";
    if (Uname.value.trim().length < 3) {
      document.getElementById("unameInfo").innerHTML = "Need min 3 charactor";
    } else if (Usernamechecker.test(Uname) == false) {
      document.getElementById("unameInfo").innerHTML =
        "Type Username without using space";
    }
  }
}

var phoneNumber = document.getElementById("Pnumber");
phoneNumber.addEventListener("input", phoneNumberValidation);

function phoneNumberValidation() {
  if (phoneNumber.value.trim().length == 10) {
    document.getElementById("phoneInfo").innerHTML = "Valied";
    document.getElementById("phoneInfo").style.color = "#4de84d";
    phoneNumber.style.border = "4px solid green";
  } else if (phoneNumber.value.trim().length != 10) {
    document.getElementById("phoneInfo").innerHTML = "Not Valied";
    document.getElementById("phoneInfo").style.color = "red";
    phoneNumber.style.border = "4px solid red";
  }
}

var passvalidation = document.getElementById("showPass");

passvalidation.addEventListener("input", function () {
  var upperCase = /[A-Z]/.test(passvalidation.value);
  var number = /\d/.test(passvalidation.value);
  var specialCharactor = /[!@#$%^&*(),.?":{}|<>]/.test(passvalidation.value);

  if (upperCase && number && specialCharactor) {
    document.getElementById("passInfo").innerHTML = "Valied";
    document.getElementById("passInfo").style.color = "#4de84d";
    passvalidation.style.border = "4px solid green";
  } else {
    if (!specialCharactor) {
      document.getElementById("passInfo").innerHTML =
        "Type atleast one special Letter";
      document.getElementById("passInfo").style.color = "red";
      passvalidation.style.border = "4px solid red";
    } else if (!upperCase) {
      document.getElementById("passInfo").innerHTML = "Type Uppercase Letter";
      document.getElementById("passInfo").style.color = "red";
      passvalidation.style.border = "4px solid red";
    } else if (!number) {
      document.getElementById("passInfo").innerHTML = "type min one number";
      document.getElementById("passInfo").style.color = "red";
      passvalidation.style.border = "4px solid red";
    }
  }
});

var confirmPass = document.getElementById("confirmPass");

confirmPass.addEventListener("input",function(){
var passvalue=document.getElementById('showPass').value;
var secPass=document.getElementById('confirmPass').value;

if(checkingPass(passvalue,secPass)){
    document.getElementById("confirmInfo").innerHTML = "Valied";
    document.getElementById("confirmInfo").style.color = "#4de84d";
    confirmPass.style.border = "4px solid green";
}
else{
    document.getElementById("confirmInfo").innerHTML = "Wrong Password";
    document.getElementById("confirmInfo").style.color = "red";
    confirmPass.style.border = "4px solid red";
}


});

function checkingPass(passvalue,secPass){
    return passvalue===secPass;
}


var maxDate = "2016-12-31";
var enteredDateElement = document.getElementById('DOB');

enteredDateElement.addEventListener('blur', function () {
    var enteredDate = enteredDateElement.value;

    if (validateDOB(maxDate, enteredDate)) {
        document.getElementById('DobInfo').style.color= '#4de84d';
        document.getElementById('DobInfo').innerText = "Valid";
        enteredDateElement.style.border = "4px solid green";
    } else {
        document.getElementById('DobInfo').style.color = 'red';
        document.getElementById('DobInfo').innerText = "Not Valid";
        enteredDateElement.style.border = "4px solid red";
    }
});

function validateDOB(maxDate, enteredDate) {
    var convertedDate = new Date(enteredDate);
    return convertedDate < new Date(maxDate);
}
