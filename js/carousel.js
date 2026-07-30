let carouselArr = [];

class Carousel {
    constructor(imagem, titulo, link) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.link = link;
    }

    static Start(arr) {
        if (!arr || arr.length === 0) {
            throw "Method Start need a Array Variable.";
        }

        carouselArr = arr;

        Carousel._sequence = 0;
        Carousel._size = arr.length;

        Carousel.Next();

        Carousel._interval = setInterval(() => {
            Carousel.Next();
        }, 6000);
    }

    static Next() {
        const carousel = document.getElementById("carousel");
        const title = document.getElementById("carousel-title");

        // Fade Out
        carousel.classList.add("fade");

        setTimeout(() => {
            const item = carouselArr[Carousel._sequence];

            carousel.innerHTML = `
                <a href="${item.link}">
                    <img src="img/${item.imagem}" alt="${item.titulo}">
                </a>
            `;

            title.textContent = item.titulo;

            // Fade In
            carousel.classList.remove("fade");

            Carousel._sequence++;

            if (Carousel._sequence >= Carousel._size) {
                Carousel._sequence = 0;
            }
        }, 600);
    }
}
