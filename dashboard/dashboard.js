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
    document.getElementById("vidpub").style.border="2px solid black"
}

function mudainput2() {
    document.getElementById("imgpub").style.border="2px solid black"
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