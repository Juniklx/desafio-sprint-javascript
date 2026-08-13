let carouselArr = [];

class Carousel {
    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "O método Start precisa de uma Array disponível.";
        }
        carouselArr = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.UpdateView();
    }

    static ResetInterval() {
        if (Carousel._interval) clearInterval(Carousel._interval);
        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 5000);
    }

    static Next() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.UpdateView();
    }

    static Prev() {
        Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
        Carousel.UpdateView();
    }

    static UpdateView() {
        const carousel = document.getElementById("carousel");
        const title = document.getElementById("carousel-title");
        const item = carouselArr[Carousel._sequence];

        // cria o novo slide já sobreposto ao antigo, começando invisível
        const novoSlide = document.createElement("a");
        novoSlide.href = item.link;
        novoSlide.className = "carousel-slide";
        novoSlide.innerHTML = `<img src="img/${item.imagem}" alt="${item.titulo}">`;
        carousel.appendChild(novoSlide);

        // espera o navegador desenhar o slide com opacity 0 antes de
        // pedir a transição para opacity 1 (senão o fade não roda)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                novoSlide.classList.add("is-visible");
            });
        });

        // os slides antigos (se houver) somem ao mesmo tempo que o novo
        // aparece — crossfade, sem nenhum momento vazio no meio
        carousel.querySelectorAll(".carousel-slide").forEach((slide) => {
            if (slide === novoSlide) return;
            slide.classList.remove("is-visible");
            const remover = () => slide.remove();
            slide.addEventListener("transitionend", remover, { once: true });
            setTimeout(remover, 400); // rede de segurança
        });

        title.textContent = item.titulo;

        Carousel.ResetInterval();
    }
}


