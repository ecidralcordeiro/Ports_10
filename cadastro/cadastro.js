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
  if(email.indexOf('@') > -1 && email.indexOf(".") > -1){
    emailValido = true;
    document.querySelector("#mail").style.border = "1px solid #808080"
    validateButton();
    console.log("tem @")
  }else{
    emailValido = false;
    document.querySelector("#mail").style.border = "2px solid #FF0F0F";
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
    document.querySelector("#senhaInvalida").innerText =""

    validateButton();
  } else {
    passwordValido = false;
    document.querySelector("#senhaInvalida").innerText ="As senhas devem ser iguais"
    validateButton();
  }
}

function viewSenha(){
  let tipo = document.getElementById("senha")
  if (tipo.type == "password") {
    tipo.type = "text";
  }else{
    tipo.type = "password";
  }
}

function viewSenha2(){
  let tipo = document.getElementById("confirmarSenha")
  if (tipo.type == "password") {
    tipo.type = "text";
  }else{
    tipo.type = "password";
  }
}

function validateTermos() {
  termoValido = document.querySelector("#termos").checked;
  validateButton();
}

function loginClick() {
  window.location.href = "../login/login.html";

}

function validateButton() {
  if (
    passwordValido &&
    userValido &&
    emailValido &&
    termoValido
  ) {
    document.querySelector("#finish").disabled = false;
    document.querySelector(".finish").setAttribute('style','cursor: pointer')
  } else {
    document.querySelector("#finish").disabled = true;
    document.querySelector(".finish").setAttribute('style','cursor: default')
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


