// let {name, email} = JSON.parse(localStorage.getItem("dadosPessoais"))
// console.log(name,email)
// document.querySelector("#nomedoCorno").innerText = name

let dadosPessoais = JSON.parse(localStorage.getItem("dadosPessoais"))
console.log(dadosPessoais.description)
document.querySelector("#name").innerText = dadosPessoais.name
document.querySelector("#cpf").innerText = dadosPessoais.cpf
document.querySelector("#telefone").innerText = dadosPessoais.number
document.querySelector("#data").innerText = dadosPessoais.date
document.querySelector("#descricao").innerText = dadosPessoais.description

function preview() {
    'use strict'

    let photo = document.getElementById('fotoCapa');
    let file = document.getElementById('inputCapa');

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

function preview2() {
    'use strict'

    let photo = document.getElementById('fotoPerfil');
    let file = document.getElementById('inputPerfil');

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