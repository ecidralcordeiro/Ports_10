// Validar se é possível clicar no botão de finalizar cadastro
let userValido = false;
let nomeValido = false;
let cpfValido = false;
let telefoneValido = false;

let userSelecionado;
let nome;
let cpf;
let telefone;
let descricao;
let preferencias;


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

function validateButton() {
  if (
    nomeValido &&
    cpfValido &&
    telefoneValido
  ) {
    document.querySelector("#finish").disabled = false;
  } else {
    document.querySelector("#finish").disabled = true;
  }
}
function buttonClick() {
  let dadosCadastro = {
    name: nome,
    cpf: cpfValue,
    number: telefone,
    description: descricao
  };
  window.localStorage.setItem("dadosCadastro", JSON.stringify(dadosCadastro));
  window.location.href = "../perfil/perfil.html";
}
