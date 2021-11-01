let userValido = false;
let userSelecionado;
let nomeValido = false;
let emailValido = false;
let passwordValido = false;
let termosValido = false;

function validateUserType() {
  console.log(userValido);
  const options = document.querySelectorAll('input[name="userOption"]');
  for (const option of options) {
    if (option.checked) {
      userSelecionado = option.value;
      userValido = true;
      console.log(userValido);
      validateButton();
      break;
    }
  }
}

function validateName() {
  let nameInput = document.querySelector("#name");
  let name = nameInput.value;
  if (name == ""  || name == " " || name == null || name == undefined) {
    nomeValido = false;
    validateButton();
    nameInput.style.border = "2px solid #FF0F0F";
  } else {
    nomeValido = true;
    validateButton();
  }
}

function validateEmail() {
  let emailInput = document.querySelector("#mail");
  let email = emailInput.value;
  if (email == ""  || email == " "  || email == null  || email == undefined) {
    emailValido = false;
    document.querySelector("#mail").style.border = "2px solid #FF0F0F";
    validateButton();
  } else {
    emailValido = true;
    validateButton();
  }
}

function validatePassword() {
  let senha = document.querySelector("#senha").value;
  let confirmarSenha = document.querySelector("#confirmarSenha").value;
  let senhasNãoVazias = senha !== "" && confirmarSenha !== "";

  if (senha === confirmarSenha && senhasNãoVazias) {
    passwordValido = true;
    validateButton();
  } else {
    passwordValido = false;
    validateButton();
  }
}

function validateTermos(){
    termosValido = true
}

function validateButton() {
  if (nomeValido && passwordValido && userValido && emailValido) {
    document.querySelector("#finish").disabled = false;
  } else {
    document.querySelector("#finish").disabled = true;
  }
}
function buttonClick() {}