//class contato
class Contato {
    constructor(nome, email, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("tipo-contato").value,
        form.elements.namedItem("mensagem-texto").value,
    );

    Enviar(data);
    form.reset();

    return false; // impede o recarregamento da página no submit
}

function Enviar(data) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent =
        "Obrigado sr(a) " +
        data.nome +
        ", os seus dados foram encaminhados com sucesso.";
}
