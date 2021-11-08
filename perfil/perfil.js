function salvaFoto() {
    let fotoPerfil = document.querySelector("#fotoDePerfil").src;    
    let fotoCapa = document.querySelector("#fotoDeCapa").src;
    

    let fotos = {
        fotoPerfil: fotoPerfil,
        fotoCapa : fotoCapa 
    };
    window.localStorage.setItem("fotos", JSON.stringify(fotos));
    document.getElementById('fotoPerfil').setAttribute('src', fotos.fotoPerfil)
    document.querySelector("#fotoFundo").setAttribute('src', fotos.fotoCapa)
}

function preview() {
    'use strict'

    let photo = document.getElementById('fotoDePerfil');
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

function preview2() {
    'use strict'

    let photo = document.getElementById('fotoDeCapa');
    let file = document.getElementById('editaimagem2');

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
let fotos = JSON.parse(localStorage.getItem("fotos"))
document.querySelector("#name").innerText = dadosPessoais.name

window.localStorage.setItem('fotos', JSON.stringify(fotos))
let arrobaname = "@" + dadosPessoais.name
document.querySelector("#arrobaName").innerText = arrobaname
document.querySelector("#descricao").innerText = dadosPessoais.description
document.querySelector("#fotoPerfil").setAttribute('src', fotos.fotoPerfil)
document.querySelector("#fotoFundo").setAttribute('src', fotos.fotoCapa)