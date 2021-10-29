function interesses() {
    window.location.href = "interesses.html";
}

function esconde() {
    document.getElementById('conteudocadastro').style.opacity='0';
    document.getElementById('conteudocadastro').style.transition='opacity 2s';
}

function verifica() {
    var email = document.getElementById('email');
    var senha = document.getElementById('senha1');
    var senharep = document.getElementById('senha2');
    var x = document.getElementById('cadastro');

    if (email.value == "") {
        email.style.borderColor = 'rgb(175, 51, 51)';
        x.disabled = true;
        x.style.cursor='auto';
    } else {
        email.style.borderColor = 'grey';
        x.disabled = false;
        x.style.cursor='pointer';
    }

    if (senha.value == "" || senha.value < 8) {
        senha.style.borderColor = 'rgb(175, 51, 51)';
        x.disabled = true;
        x.style.cursor='auto';
    } else {
        senha.style.borderColor = 'grey';
        x.disabled = false;
        x.style.cursor='pointer';
    }

    if (senharep.value == "" || senharep.value < 8 || senha.value != senharep.value) {
        senha.style.borderColor = 'rgb(175, 51, 51)';
        senharep.style.borderColor = 'rgb(175, 51, 51)';
        x.disabled = true;
        x.style.cursor='auto';
    } else {
        senha.style.borderColor = 'grey';
        senharep.style.borderColor = 'grey';
        x.disabled = false;
        x.style.cursor='pointer';
    }
}