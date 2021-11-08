let dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"))
let emailValido = false
let senhaValida = false
function validadeEmail(){
    let emailInput = document.querySelector("#mail").value
    if (emailInput == dadosCadastro.email){
        emailValido = true
    }else{
        let emailValido = false
    }
}


function validadePassword(){
    let senhaInput = document.querySelector("#senha").value
    console.log(senhaInput)
    if (senhaInput == dadosCadastro.password){
        senhaValida = true
    }else{
        let senhaValida = false
    }
}

function entrar(){
    validadeEmail()
    validadePassword()
    if(emailValido && senhaValida){
        window.location.href = "../perfil/perfil.html";
    }else{
        console.log("erro")
    }
}
