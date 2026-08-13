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

        const novoSlide = document.createElement("a");
        novoSlide.href = item.link;
        novoSlide.className = "carousel-slide";
        novoSlide.innerHTML = `<img src="img/${item.imagem}" alt="${item.titulo}">`;
        carousel.appendChild(novoSlide);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                novoSlide.classList.add("is-visible");
            });
        });

        carousel.querySelectorAll(".carousel-slide").forEach((slide) => {
            if (slide === novoSlide) return;
            slide.classList.remove("is-visible");
            const remover = () => slide.remove();
            slide.addEventListener("transitionend", remover, { once: true });
            setTimeout(remover, 400);
        });

        title.textContent = item.titulo;

        Carousel.ResetInterval();
    }
}


