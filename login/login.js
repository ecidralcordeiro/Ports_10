let dadosCadastro = JSON.parse(localStorage.getItem("dadosCadastro"))
let emailValido = false
let senhaValida = false
function validadeEmail(){
    let emailInput = document.querySelector("#mail").value
    if (emailInput == dadosCadastro.email){
        emailValido = true
        document.querySelector("#mail").style.border ="1px solid #808080"

    }else{
        let emailValido = false
        document.querySelector("#mail").style.border = "2px solid #FF0F0F";
    }
}


function validadePassword(){
    let senhaInput = document.querySelector("#senha").value
    console.log(senhaInput)
    if (senhaInput == dadosCadastro.password){
        senhaValida = true
        document.querySelector("#senha").style.border = "1px solid #808080"
    }else{
        let senhaValida = false
        document.querySelector("#senha").style.border = "2px solid #FF0F0F";
    }
}

function entrar(){
    validadeEmail()
    validadePassword()
    if(emailValido && senhaValida){
        window.location.href = "../perfil/perfil.html";
    }
}
