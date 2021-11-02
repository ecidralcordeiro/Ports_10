// nome = localStorage.getItem("name")
// document.getElementById("#nomedoCorno").innerText(nome)

let {name, email} = JSON.parse(localStorage.getItem("dadosCadastro"))
console.log(name,email)
document.querySelector("#nomedoCorno").innerText = name

// cpf.addEventListener("blur", function(){
//     let cpf = document.querySelector("#cpf");
//     let cpfTamanho = cpf.value
//     if(cpfTamanho.length < 13){
//         if(cpf.value) cpf.value = cpf.value.match(/.{1,3}/g).join(".").replace(/\.(?=[^.]*$)/,"-");
//     }
   
// });

