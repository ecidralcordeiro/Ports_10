function mostra() {
    var x = document.getElementById("mostra");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}

function desabilita() {
    var x = document.getElementById("cadastro");
    x.disabled = true;
}

function habilita() {
    var x = document.getElementById("cadastro");
    x.disabled = false;
}