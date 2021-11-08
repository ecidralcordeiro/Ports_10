let userValido = false;
let emailValido = false;
let passwordValido = false;
let termoValido = false;

let userSelecionado;
let email;
let senhaDoUsuário;

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
  let senhaMinima = senha.length;
  console.log(senhaMinima)

  if (senha === confirmarSenha && senhasNãoVazias && senhaMinima > 7) {
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
    email: email,
    password: senhaDoUsuário,
  };
  window.localStorage.setItem("dadosCadastro", JSON.stringify(dadosCadastro));
  window.location.href = "../dadosPessoais/dadosPessoais.html";
}


