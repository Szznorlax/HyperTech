function validarCampoObrigatorio(input, elementoErro, mensagem) {
    if (input.value.trim() === "") {
        elementoErro.textContent = mensagem;
        input.classList.add("input-error");
        return false;
    }
    elementoErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

function validarEmail(input, elementoErro) {
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (input.value.trim() === "") {
        elementoErro.textContent = "O e-mail é obrigatório.";
        input.classList.add("input-error");
        return false;
    } else if (!regexEmail.test(input.value)) {
        elementoErro.textContent = "E-mail inválido.";
        input.classList.add("input-error");
        return false;
    }
    elementoErro.textContent = "";
    input.classList.remove("input-error");
    return true;
}

document.getElementById("email").addEventListener("blur", function() {
    validarEmail(this, document.getElementById("erroEmail"));
});

document.getElementById("senha").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroSenha"), "A Senha é obrigatória.");
});

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");

   
    let emailValido = validarEmail(email, erroEmail);
    let senhaValida = validarCampoObrigatorio(senha, erroSenha, "Senha é obrigatória");


    if (!emailValido || !senhaValida) {
        console.log("Formulário inválido, corrija os erros antes de enviar.");
        alert("Por favor, corrija os erros no formulário antes de enviar.");
        
    }else {
        console.log("Formulário validado com sucesso! Redirecionando...");
        window.location.href = "/index.html"; 
    }
});