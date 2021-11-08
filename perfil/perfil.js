function salvaFoto() {
    let fotoPerfil = document.querySelector("#fotoPerfil").src;    
    let fotoCapa = document.querySelector("#fotoCapa").src;
    

    let fotos = {
        fotoPerfil: fotoPerfil,
        fotoCapa : fotoCapa 
    };
    window.localStorage.setItem("fotos", JSON.stringify(fotos));
    var tomanocu = JSON.parse(localStorage.getItem("fotos"))
    document.querySelector("#fotoPerfil").setAttribute('src', tomanocu.fotoPerfil);
  }


function preview() {
    'use strict'

    let photo = document.getElementById('fotoPerfil');
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
document.querySelector("#name").innerText = dadosPessoais.name
let arrobaname = "@" + dadosPessoais.name
document.querySelector("#arrobaName").innerText = arrobaname
document.querySelector("#descricao").innerText = dadosPessoais.description