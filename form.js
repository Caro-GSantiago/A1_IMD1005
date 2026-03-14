const form = document.querySelector("form");
const error = document.getElementById("error");

const $name = document.getElementById("fullname");
const $nameError = document.querySelector("#fullname + span.error");
$name.addEventListener("input", (event) => {
   if ($name.validity.valid) {
        $nameError.textContent = "";
        $nameError.className = "error";
    }
    else {
        showError$Name();
    }
});

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } 
    else {
        showErrorEmail();
    }
});

const phone = document.getElementById("phone");
const phoneError = document.querySelector("#phone + span.error");
phone.addEventListener("input", (event) => {
    if (phone.validity.valid) {
        phoneError.textContent = "";
        phoneError.className = "error";
    }
})

const msg = document.getElementById("message");
const msgError = document.querySelector("#message + span.error");
msg.addEventListener("input", (event) => {
    if (msg.validity.valid) {
        msgError.textContent = "";
        msgError.className = "error";
    }
    else {
        showErrorMsg();
    }
});


form.addEventListener("submit", (event) => {
    if ($name.validity.invalid) {
        showError$Name();
        event.preventDefault();
    }
    else if (email.validity.invalid) {
        showErrorEmail();
        event.preventDefault();
    }
    else if (phone.validity.invalid) {
        showErrorPhone();
        event.preventDefault();
    }
    else if (msg.validity.invalid) {
        showErrorMsg();
        event.preventDefault();
    }
    else if (!$nameError && !emailError && !phoneError && !msgError) {
        console.log("There are no errors");
        alert("Form Submitted Successfully");
    }
});


function showError$Name() {
    if ($name.validity.valueMissing) {
        $nameError.textContent = "This field is required.";
    }
    $nameError.className = "error active";
}

function showErrorEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = "This field is required.";
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = "Please enter a valid email address.";
    }
    emailError.className = "error active";
}

function showErrorPhone() {
    if (phone.validity.valueMissing) {
        phoneError.textContent = "This field is required.";
    }
    else if (phone.validity.typeMismatch) {
        phoneError.textContent = "Please enter a valid phone number.";
    }
    phoneError.className = "error active";
}

function showErrorMsg() {
    if (msg.validity.valueMissing) {
        msgError.textContent = "This field is required.";
    }
    msgError.className = "error active";
}


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox and Opera
}
