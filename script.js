function Enviado(form){
    console.log(form);
    alert("Enviado com sucesso!")
}

function validarEmail(email) {
    
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}


function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    var soma = 0;
    var resto;

    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function validarFormulario(form) {
    var emailInput = form.querySelector('#email');
    var cpfInput = form.querySelector('#cpf');

    // Validar e-mail
    if (!validarEmail(emailInput.value)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    // Validar CPF
    if (!validarCPF(cpfInput.value)) {
        alert('Por favor, insira um CPF válido.');
        return false;
    }

    return true;
}

function abrirDialog(dialog) {
    dialog.showModal();
  }

function fecharDialog() {
    
    var dialogElement = document.querySelector('dialog');


    dialogElement.close();
}


function fecharDial() {
    var dialog = document.getElementById("abrira");
    dialog.close();
}
