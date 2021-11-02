// Validar se é possível clicar no botão de finalizar cadastro
let userValido = false;
let nomeValido = false;
let emailValido = false;
let passwordValido = false;
let termoValido = false;
let cpfValido = false

let userSelecionado;
let nome;
let email;
let senhaDoUsuário;
let cpfValue;

function validateUserType() {
  const options = document.querySelectorAll('input[name="userOption"]');
  for (const option of options) {
    if (option.checked) {
      userSelecionado = option.value;
      userValido = true;
      validateButton();
      break;
    }
  }
}

function validateName() {
  let nameInput = document.querySelector("#name");
  nome = nameInput.value;
  if (nome == "" || nome == " " || nome == null || nome == undefined) {
    nomeValido = false;
    validateButton();
    nameInput.style.border = "2px solid #FF0F0F";
  } else {
    nomeValido = true;
    validateButton();
  }
}

function validateCpf() {
  let cpf = document.querySelector("#cpf");
  if (cpf.value.length < 13) {
    cpf.value = cpf.value
    .match(/.{1,3}/g)
    .join(".")
    .replace(/\.(?=[^.]*$)/, "-");
    cpfValue = cpf.value;
    cpfValido = true
    validateButton();
  }
}

function validateEmail() {
  let emailInput = document.querySelector("#mail");
  email = emailInput.value;
  if (email == "" || email == " " || email == null || email == undefined) {
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
    senhaDoUsuário = senha;
    passwordValido = true;
    validateButton();
  } else {
    passwordValido = false;
    validateButton();
  }
}

function validateTermos() {
  termoValido = document.querySelector("#termos").checked;
  validateButton();
}

function validateButton() {
  if (
    nomeValido &&
    passwordValido &&
    userValido &&
    emailValido &&
    termoValido
  ) {
    document.querySelector("#finish").disabled = false;
  } else {
    document.querySelector("#finish").disabled = true;
  }
}
function buttonClick() {
  let dadosCadastro = {
    userType: userSelecionado,
    name: nome,
    email: email,
    password: senhaDoUsuário,
  };
  window.localStorage.setItem("dadosCadastro", JSON.stringify(dadosCadastro));
  window.location.href = "../perfil/perfil.html";
}
