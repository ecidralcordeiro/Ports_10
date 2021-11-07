function preview() {
    'use strict'

    let photo = document.getElementById('preview');
    let file = document.getElementById('editaimagem');

    photo.addEventListener('click', () => {
        file.click();
    });

    file.addEventListener('change', () => {

        if (file.files.length <= 0) {
            return;
        }

        let reader = new FileReader();

        reader.onload = () => {
            photo.src = reader.result;
        }

        reader.readAsDataURL(file.files[0]);
    });
}

function habilita() {
    document.getElementById("editarp").style.display='block';
}

let dadosPessoais = JSON.parse(localStorage.getItem("dadosPessoais"))
console.log(dadosPessoais.description)
document.querySelector("#name").innerText = dadosPessoais.name
let arrobaname = "@" + dadosPessoais.name
document.querySelector("#arrobaName").innerText = arrobaname
document.querySelector("#cpf").innerText = dadosPessoais.cpf
document.querySelector("#telefone").innerText = dadosPessoais.number
document.querySelector("#data").innerText = dadosPessoais.date
document.querySelector("#descricao").innerText = dadosPessoais.description