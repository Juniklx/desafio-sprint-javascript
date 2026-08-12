//class contato

class contato {}

function Post(form) {
    const data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
    );
}

function Enviar(data) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent =
        "Obrigado sr(a) " +
        data.nome +
        ", os seus dados foram encaminhados com sucesso.";
}
