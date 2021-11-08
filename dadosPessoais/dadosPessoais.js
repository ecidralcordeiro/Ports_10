let userValido = false;
let nomeValido = false;
let cpfValido = false;
let telefoneValido = false;
let dataValida = false;

let userSelecionado;
let nome;
let cpf;
let telefone;
let dataNascimento;
let descricao;
let preferencias = [];


function validateName() {
  let nameInput = document.querySelector("#name");
  nome = nameInput.value;
  if (nome == "" || nome == " " || nome == null || nome == undefined) {
    nomeValido = false;
    validateButton();
    nameInput.style.border = "2px solid #FF0F0F";
  } else {
    nomeValido = true;
    document.querySelector("#name").style.border = "1px solid #808080"

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

function validateTelephone() {
  let telefoneInput = document.querySelector("#telefone");
  telefone = telefoneInput.value;
  if(telefone == "" || telefone == " " || telefone == null || telefone == undefined){
    telefoneValido = false
    validateButton();
    nameInput.style.border = "2px solid #FF0F0F";
  } else{
    telefoneValido = true
    validateButton()
  }
}

function validateDescription(){
  let descricaoInput = document.querySelector("#descricao")
  descricao = descricaoInput.value;
}

function validateData(){
  let dataInput = document.querySelector("#data")
  dataNascimento = dataInput.value
  console.log(dataNascimento)

}

function validateButton() {
  if (
    nomeValido &&
    cpfValido &&
    telefoneValido) {
    document.querySelector("#finish").disabled = false;
  } else {
    document.querySelector("#finish").disabled = true;
  }
}

function validadeCheckedPreferences() {
  const preferences = document.querySelectorAll('input[name="preferenceOption"]');
  for (const pref of preferences) {
    if (pref.checked) {
      preferencias.push(pref.value)
    }
  }
}

function buttonClick() {
  validadeCheckedPreferences()
  let dadosPessoais = {
    name: nome,
    cpf: cpfValue,
    number: telefone,
    date: dataNascimento,
    description: descricao,
    preferences: preferencias
  };
  console.log(dadosPessoais)
  window.localStorage.setItem("dadosPessoais", JSON.stringify(dadosPessoais));
  window.location.href = "../perfil/perfil.html";
}
