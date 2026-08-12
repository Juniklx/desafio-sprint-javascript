class Contato {
    constructor(nome, email, cpf, sobrenome, telefone, tipoContato) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.sobrenome = sobrenome;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
    }
}

function MascararCpf(input) {
    let numeros = input.value.replace(/\D/g, "").slice(0, 11);
    let valorFormatado = "";
    if (numeros.length > 9) {
        valorFormatado = numeros.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
    } else if (numeros.length > 6) {
        valorFormatado = numeros.replace(/^(\d{3})(\d{3})(\d{1,3})$/, "$1.$2.$3");
    } else if (numeros.length > 3) {
        valorFormatado = numeros.replace(/^(\d{3})(\d{1,3})$/, "$1.$2");
    } else {
        valorFormatado = numeros;
    }
    input.value = valorFormatado;
}

function MascararTelefone(input) {
    let numeros = input.value.replace(/\D/g, "").slice(0, 11);
    let valorFormatado = "";
    if (numeros.length > 10) {
        valorFormatado = numeros.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        valorFormatado = numeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (numeros.length > 2) {
        valorFormatado = numeros.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (numeros.length > 0) {
        valorFormatado = numeros.replace(/^(\d*)/, "($1");
    }
    input.value = valorFormatado;
}


function Post(form) {
    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo-contato").value,
    );

    console.log(data);
    Enviar(data);
    form.reset();

    return false;
}

function Enviar(data) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent =
        "Obrigado sr(a) " +
        data.nome +
        ", os seus dados foram encaminhados com sucesso.";
}
