let carouselArr = [];

class Carousel {
    static #sequence = 0;
    static #size = 0;
    static #interval = null;

    constructor(image, description, link) {
        this.image = image;
        this.description = description;
        this.link = link;
    }

    static start(arr) {
        if (!arr || arr.length === 0) {
            throw "O método start precisa de uma Array disponível.";
        }
        carouselArr = arr;
        Carousel.#sequence = 0;
        Carousel.#size = arr.length;
        Carousel.updateView();
    }

    static resetInterval() {
        if (Carousel.#interval) clearInterval(Carousel.#interval);
        Carousel.#interval = setInterval(() => {
            Carousel.next();
        }, 5000);
    }

    static next() {
        Carousel.#sequence = (Carousel.#sequence + 1) % Carousel.#size;
        Carousel.updateView();
    }

    static prev() {
        Carousel.#sequence = (Carousel.#sequence - 1 + Carousel.#size) % Carousel.#size;
        Carousel.updateView();
    }

    static updateView() {
        const carousel = document.getElementById("carousel");
        const title = document.getElementById("carousel-title");
        const item = carouselArr[Carousel.#sequence];

        const novoSlide = document.createElement("a");
        novoSlide.href = item.link;
        novoSlide.className = "carousel__slide";
        novoSlide.innerHTML = `<img src="img/${item.image}" alt="${item.description}">`;
        carousel.appendChild(novoSlide);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                novoSlide.classList.add("carousel__slide--active");
            });
        });

        carousel.querySelectorAll(".carousel__slide").forEach((slide) => {
            if (slide === novoSlide) return;
            slide.classList.remove("carousel__slide--active");
            const remover = () => slide.remove();
            slide.addEventListener("transitionend", remover, { once: true });
            setTimeout(remover, 400);
        });

        title.textContent = item.description;

        Carousel.resetInterval();
    }
}
