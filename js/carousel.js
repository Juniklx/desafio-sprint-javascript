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
        }, 2000);
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

        carousel.classList.add("fade");

        setTimeout(() => {
            const item = carouselArr[Carousel._sequence];
            carousel.innerHTML = `
                <a href="${item.link}">
                    <img src="img/${item.imagem}" alt="${item.titulo}">
                </a>
            `;
            title.textContent = item.titulo;
            carousel.classList.remove("fade");
        }, 200);

        Carousel.ResetInterval();
    }
}


