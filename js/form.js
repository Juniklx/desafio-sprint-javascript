class ContactRequest {
    constructor(name, email, cpf, lastName, phone, contactType) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.lastName = lastName;
        this.phone = phone;
        this.contactType = contactType;
    }
}

function maskCpf(input) {
    let numeros = input.value.replace(/\D/g, "").slice(0, 11);
    let valorFormatado = "";
    if (numeros.length > 9) {
        valorFormatado = numeros.replace(
            /^(\d{3})(\d{3})(\d{3})(\d{1,2})$/,
            "$1.$2.$3-$4",
        );
    } else if (numeros.length > 6) {
        valorFormatado = numeros.replace(
            /^(\d{3})(\d{3})(\d{1,3})$/,
            "$1.$2.$3",
        );
    } else if (numeros.length > 3) {
        valorFormatado = numeros.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
    } else {
        valorFormatado = numeros;
    }
    input.value = valorFormatado;
}

function maskPhone(input) {
    let numeros = input.value.replace(/\D/g, "").slice(0, 11);
    let valorFormatado = "";
    if (numeros.length > 10) {
        valorFormatado = numeros.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3",
        );
    } else if (numeros.length > 6) {
        valorFormatado = numeros.replace(
            /^(\d{2})(\d{4})(\d{0,4})$/,
            "($1) $2-$3",
        );
    } else if (numeros.length > 2) {
        valorFormatado = numeros.replace(/^(\d{2})(\d{0,4})$/, "($1) $2");
    } else if (numeros.length > 0) {
        valorFormatado = numeros.replace(/^(\d*)$/, "($1");
    }
    input.value = valorFormatado;
}

function submitContactForm(form) {
    const data = new ContactRequest(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo-contato").value,
    );

    console.log(data);
    sendConfirmation(data);
    form.reset();

    return false;
}

const checkbox = document.getElementById("checkTermos");
const botao = document.getElementById("botaoEnviar");

checkbox.addEventListener("change", function () {
    botao.disabled = !this.checked;
});

function sendConfirmation(data) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent =
        "Obrigado sr(a) " +
        data.name +
        ", os seus dados foram encaminhados com sucesso.";
}
