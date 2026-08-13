# 🚗 Desafio Sprint JavaScript — Ford Ranger 2022

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Status-Concluído-brightgreen?style=for-the-badge">
</p>

<p align="center">
  Site fictício de lançamento da <strong>Ford Ranger 2022</strong>, desenvolvido como parte do <strong>Desafio da Sprint de JavaScript</strong>. O projeto evolui um layout estático em HTML/CSS para uma experiência interativa, com carrossel de imagens, comparador de modelos e formulário de contato — tudo em JavaScript puro, sem frameworks ou dependências externas.
</p>

---

## 📖 Sobre o projeto

Este projeto foi desenvolvido para colocar em prática conceitos de HTML semântico, CSS (Flexbox e responsividade) e JavaScript (ES6+), simulando o site institucional de lançamento de uma picape.

O site é dividido em três páginas que compartilham o mesmo cabeçalho, menu e rodapé:

- **Home** (`index.html`) — carrossel automático apresentando os destaques da marca.
- **Lançamento** (`launch.html`) — vídeo de apresentação, descrição técnica e comparador de modelos.
- **Contato** (`contact.html`) — formulário com máscaras de CPF e telefone.

---

## 🎯 Funcionalidades

**Home**
- ✅ Carrossel de imagens com transição suave, rotação automática (5s) e botões de navegação (anterior/próximo)
- ✅ Cada slide leva à página de Lançamento

**Lançamento**
- ✅ Vídeo em destaque (embed do YouTube) com reprodução automática
- ✅ Galeria com os modelos XL Cabine Simples, XLS e Storm
- ✅ Comparador de carros: selecione até 2 modelos e veja uma tabela lado a lado com preço, motor, potência, dimensões e capacidade de carga

**Contato**
- ✅ Formulário com validação de campos obrigatórios
- ✅ Máscara automática de CPF (`000.000.000-00`) e telefone (`(00) 00000-0000`) enquanto o usuário digita
- ✅ Mensagem de confirmação após o envio (simulado no front-end, sem back-end)

**Geral**
- ✅ Menu com botão hambúrguer animado para telas menores
- ✅ Layout responsivo (breakpoints para tablet e mobile)
- ✅ HTML semântico com atributos de acessibilidade (`aria-*`, `alt`, `sr-only`)

---

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — Flexbox, media queries, reset customizado
- **JavaScript (ES6+)** — classes, manipulação de DOM, sem frameworks ou bibliotecas
- **Google Fonts** — tipografia Inter

Não há dependências de build, `package.json` ou instalação — é um projeto 100% estático.

---

## 📂 Estrutura do projeto

```text
📦 desafio-sprint-javascript
 ┣ 📂 css
 ┃ ┣ 📜 reset.css
 ┃ ┣ 📜 style.css
 ┃ ┣ 📜 form.css
 ┃ ┗ 📜 lancamento.css
 ┣ 📂 img
 ┣ 📂 js
 ┃ ┣ 📜 carousel.js      → lógica do carrossel da Home
 ┃ ┣ 📜 compare.js       → lógica do comparador de modelos
 ┃ ┗ 📜 form.js          → máscaras e envio do formulário de contato
 ┣ 📜 index.html         → Home
 ┣ 📜 launch.html        → Lançamento
 ┣ 📜 contact.html       → Contato
 ┗ 📜 README.md
```

---

## ▶️ Como executar

Por ser um projeto estático, basta abrir o `index.html` no navegador. Para uma experiência mais próxima da produção (com live reload), recomenda-se usar uma extensão como o **Live Server** do VS Code:

```bash
# Clone o repositório
git clone https://github.com/Juniklx/desafio-sprint-javascript.git

# Entre na pasta
cd desafio-sprint-javascript

# Abra index.html com o Live Server (ou clique com o botão direito > "Open with Live Server")
```

---

## 📚 Aprendizados

Este projeto contribuiu para consolidar conhecimentos em:

- Manipulação de DOM com JavaScript puro
- Criação e uso de classes (ES6)
- Máscaras de input com expressões regulares
- Componentização de interfaces (carrossel, modal de comparação)
- Organização de projetos front-end multi-página
- Acessibilidade e responsividade

---

## 🌟 Melhorias futuras

- Persistir os dados do formulário (integração com back-end ou serviço externo)
- Adicionar testes automatizados
- Implementar modo escuro
- Adicionar mais modelos ao comparador

---

## 👨‍💻 Autor

### Marcelo Teixeira

[![GitHub](https://img.shields.io/badge/GitHub-Juniklx-181717?style=for-the-badge&logo=github)](https://github.com/Juniklx)

---

## ⭐ Apoie o projeto

Se este projeto foi útil para você:

⭐ Deixe uma estrela no repositório.

Isso incentiva o desenvolvimento de novos projetos.

---

<p align="center">
Feito por <strong>Marcelo Teixeira</strong>
</p>