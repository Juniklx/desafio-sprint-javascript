//car
let carArr = [];

class Car {
    constructor(
        nome,
        preco,
        alturaCacamba,
        alturaVeiculo,
        alturaSolo,
        capacidadeCarga,
        motor,
        potencia,
        volumeCacamba,
        roda,
        image,
    ) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome) return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            if (carArr.length >= 2) {
                alert("Você já selecionou 2 carros. Desmarque um para trocar.");
                el.checked = false;
                return;
            }
            carArr.push(carClass);
        } else {
            const pos = GetCarArrPosition(carArr, carClass);
            if (pos !== -1) carArr.splice(pos, 1);
        }
    } else {
        throw "Você precisa definir uma Classe Car";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Você precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".pagina__fotos__checkbox").forEach((checkbox) => {
        checkbox.checked = false;
    });
    carArr = [];
});

function FormatPreco(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const item = carArr[i];

        document.getElementById(`compare_image_${i}`).innerHTML =
            `<img src="${item.image}" alt="${item.nome}" style="max-width:100px">`;
        document.getElementById(`compare_modelo_${i}`).textContent = item.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = item.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = item.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = item.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = item.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = item.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = item.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = item.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = item.roda;
        document.getElementById(`compare_preco_${i}`).textContent = FormatPreco(item.preco);
    }
}
