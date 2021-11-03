function validatePassword() {
  let senha = document.querySelector("#senha").value;
  let senhasNãoVazias = senha !== "";
  let senhaUser = localStorage.getItem()
  if (senhasNãoVazias) {
    if(senha )
    passwordValido = true;
    validateButton();
  } else {
    passwordValido = false;
    validateButton();
  }
}
function validateEmail() {
  let emailInput = document.querySelector("#mail");
  let email = emailInput.value;
  if (email == "" || email == " " || email == null || email == undefined) {
    emailValido = false;
    document.querySelector("#mail").style.border = "2px solid #FF0F0F";
    validateButton();
  } else {
    emailValido = true;
    validateButton();
  }
}

function validateButton() {
  if (passwordValido && emailValido) {
    document.querySelector("#finish").disabled = false;
  } else {
    document.querySelector("#finish").disabled = true;
  }
}

function buttonClick() {
  window.location.href = "../dashboard/dashboard.html";
}
