let dadosPessoais = JSON.parse(localStorage.getItem("dadosPessoais"))
document.querySelector("#pubarroba").innerText = "@" + dadosPessoais.name
document.querySelector("#pubnome").innerText = dadosPessoais.name

function verificainteresse() {
    let storage = JSON.parse(localStorage.getItem("dadosPessoais"));
    let preferencias = []
    var i = 0;


    for (i in storage) {
        preferencias.push(storage[i]);
        i++;
    }

    if (preferencias[5][0] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][0] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][0] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][0] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][0] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][0] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][0] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][0] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][1] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][1] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][1] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][1] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][1] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][1] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][1] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][1] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][2] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][2] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][2] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][2] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][2] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][2] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][2] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][2] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][3] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][3] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][3] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][3] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][3] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][3] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][3] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][3] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][4] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][4] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][4] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][4] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][4] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][4] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][4] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][4] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][5] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][5] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][5] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][5] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][5] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][5] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][5] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][5] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][6] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][6] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][6] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][6] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][6] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][6] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][6] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][6] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][7] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][7] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][7] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][7] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][7] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][7] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][7] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][7] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][8] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][8] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][8] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][8] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][8] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][8] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][8] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][8] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }


    if (preferencias[5][9] == "culinaria") {
        document.getElementById("p2").style.display='block';
    }

    if (preferencias[5][9] == "esportes") {
        document.getElementById("p3").style.display='block';
    }

    if (preferencias[5][9] == "economia") {
        document.getElementById("p4").style.display='block';
    }

    if (preferencias[5][9] == "produtividade") {
        document.getElementById("p5").style.display='block';
    }

    if (preferencias[5][9] == "ciencia") {
        document.getElementById("p6").style.display='block';
    }

    if (preferencias[5][9] == "medicina") {
        document.getElementById("p7").style.display='block';
    }

    if (preferencias[5][9] == "programacao") {
        document.getElementById("p8").style.display='block';
    }

    if (preferencias[5][9] == "empreendedorismo") {
        document.getElementById("p9").style.display='block';
    }
}

function preview() {
    'use strict'

    let photo = document.getElementById('imgpub');
    let file = document.getElementById('flimage');

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

    let photo = document.getElementById('vidpub');
    let file = document.getElementById('flvideo');

    photo.addEventListener('click', () => {
        file.click();
    });

    file.addEventListener('change', () => {

        if (file.files.length <= 0) {
            return;
        }

        let reader = new FileReader();

        reader.readAsDataURL(file.files[0]);
    });
}

function mostravid() {
    document.getElementById("flvideo").onchange = function() {
        var file = this.files[0];
        var blobURL = URL.createObjectURL(file);
        
        document.getElementById("embed-video").innerHTML = '<video width="100%" height="355" controls>'
        +'<source src="'+ blobURL +'" id="video_here">'
        +'Seu navegador não suporta vídeo HTML5.</video>';
    }
}

function mudainput() {
    document.getElementById('vidpub').style.backgroundColor="lightgreen";
    document.getElementById('vidpub').style.borderRadius="20px";
}

function habimg() {
    document.getElementById("embed-video").style.display="none";
    document.getElementById("preview").style.display="block";
}

function habvid() {
    document.getElementById("preview").style.display="none";
    document.getElementById("embed-video").style.display="block";
}

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
         file.onload = function(e) {
             document.getElementById("preview").src = e.target.result;
        };       
         file.readAsDataURL(this.files[0]);
    }
}

function mudaedu() {
    window.location.href = '/perfil/eduardo.html';
}

function mudalucca() {
    window.location.href = '/perfil/lucca.html';
}

function mudaluca() {
    window.location.href = '/perfil/luca.html';
}

document.getElementById("flimage").addEventListener("change", readImage, false);

function mostrapub() {
    document.getElementById("p1").style.display='block';

    var pub = document.getElementById("hfeed").value;
    var desc = document.getElementById("pubtexto");

    desc.innerText = pub;
}

function recomendados1() {
    document.getElementById('ra').style.display='block';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='none';
    
    document.getElementById('b1').style.backgroundColor='rgb(117, 115, 115)';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='transparent';

}
function recomendados2() {
    document.getElementById('ra').style.display='none';
    document.getElementById('rb').style.display='block';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='none';

    document.getElementById('b1').style.backgroundColor='transparent';
    document.getElementById('b2').style.backgroundColor='rgb(117, 115, 115)';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='transparent';
}
function recomendados3() {
    document.getElementById('ra').style.display='none';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='block';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='none';

    document.getElementById('b1').style.backgroundColor='transparent';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='rgb(117, 115, 115)';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='transparent';
}
function recomendados4() {
    document.getElementById('ra').style.display='none';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='block';
    document.getElementById('re').style.display='none';

    document.getElementById('b1').style.backgroundColor='transparent';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='rgb(117, 115, 115)';
    document.getElementById('b5').style.backgroundColor='transparent';
}
function recomendados5() {
    document.getElementById('ra').style.display='none';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='block';

    document.getElementById('b1').style.backgroundColor='transparent';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='rgb(117, 115, 115)';
}

function flechaesquerda() {
    document.getElementById('ra').style.display='block';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='none';

    document.getElementById('b1').style.backgroundColor='rgb(117, 115, 115)';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='transparent';
}

function flechadireita() {
    document.getElementById('ra').style.display='none';
    document.getElementById('rb').style.display='none';
    document.getElementById('rc').style.display='none';
    document.getElementById('rd').style.display='none';
    document.getElementById('re').style.display='block';

    document.getElementById('b1').style.backgroundColor='transparent';
    document.getElementById('b2').style.backgroundColor='transparent';
    document.getElementById('b3').style.backgroundColor='transparent';
    document.getElementById('b4').style.backgroundColor='transparent';
    document.getElementById('b5').style.backgroundColor='rgb(117, 115, 115)';
}