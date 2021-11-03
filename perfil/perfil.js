// let {name, email} = JSON.parse(localStorage.getItem("dadosPessoais"))
// console.log(name,email)
// document.querySelector("#nomedoCorno").innerText = name

let dadosPessoais = JSON.parse(localStorage.getItem("dadosPessoais"))
console.log(dadosPessoais.description)
document.querySelector("#nomedoCorno").innerText = dadosPessoais.name
document.querySelector("#cpf").innerText = dadosPessoais.cpf
document.querySelector("#telefone").innerText = dadosPessoais.number
document.querySelector("#data").innerText = dadosPessoais.date

