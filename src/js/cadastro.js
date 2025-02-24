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

document.getElementById("nome").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroNome"), "O nome é obrigatório.");
});

document.getElementById("data").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroData"), "A data é obrigatória.");
});

document.getElementById("endereco").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroEndereco"), "O Endereço é obrigatório.");
});

document.getElementById("cidade").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroCidade"), "A Cidade é obrigatória.");
});

document.getElementById("bairro").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroBairro"), "O Bairro é obrigatório.");
});

document.getElementById("complemento").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroComplemento"), "O Complemento é obrigatório.");
});

document.getElementById("email").addEventListener("blur", function() {
    validarEmail(this, document.getElementById("erroEmail"));
});

document.getElementById("senha").addEventListener("blur", function() {
    validarCampoObrigatorio(this, document.getElementById("erroSenha"), "A Senha é obrigatória.");
});


document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome");
    let data = document.getElementById("data");
    let endereco = document.getElementById("endereco");
    let cidade = document.getElementById("cidade");
    let bairro = document.getElementById("bairro");
    let complemento = document.getElementById("complemento");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    let erroNome = document.getElementById("erroNome");
    let erroData = document.getElementById("erroData");
    let erroEndereco = document.getElementById("erroEndereco");
    let erroCidade = document.getElementById("erroCidade");
    let erroBairro = document.getElementById("erroBairro");
    let erroComplemento = document.getElementById("erroComplemento");
    let erroEmail = document.getElementById("erroEmail");
    let erroSenha = document.getElementById("erroSenha");

    let nomeValido = validarCampoObrigatorio(nome, erroNome, "O nome é obrigatório");
    let emailValido = validarEmail(email, erroEmail);
    let dataValida = validarCampoObrigatorio(data, erroData, "Data de Nascimento Obrigatória.");
    let enderecoValido = validarCampoObrigatorio(endereco, erroEndereco, "Endereço é Obrigatório");
    let cidadeValida = validarCampoObrigatorio(cidade, erroCidade, "Cidade é Obrigatório");
    let bairroValido = validarCampoObrigatorio(bairro, erroBairro, "Bairro é obrigatório");
    let complementoValido = validarCampoObrigatorio(complemento, erroComplemento, "Número é Obrigatório");
    let senhaValida = validarCampoObrigatorio(senha, erroSenha, "Senha é obrigatória");


    if (!nomeValido || !emailValido || !dataValida || !enderecoValido || !cidadeValida || !bairroValido || !complementoValido || !senhaValida) {
        console.log("Formulário inválido, corrija os erros antes de enviar.");
        alert("Por favor, corrija os erros no formulário antes de enviar.");
        
    }else {
        console.log("Formulário validado com sucesso! Redirecionando...");
        window.location.href = "/index.html"; 
    }
});

