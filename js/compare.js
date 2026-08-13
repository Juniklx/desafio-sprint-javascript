// vehicle model used for spec comparison
let vehiclesToCompare = [];

class VehicleModel {
    constructor(
        name,
        price,
        bedHeight,
        vehicleHeight,
        groundClearance,
        loadCapacity,
        engine,
        power,
        bedVolume,
        wheels,
        image,
    ) {
        this.name = name;
        this.price = price;
        this.bedHeight = bedHeight;
        this.vehicleHeight = vehicleHeight;
        this.groundClearance = groundClearance;
        this.loadCapacity = loadCapacity;
        this.engine = engine;
        this.power = power;
        this.bedVolume = bedVolume;
        this.wheels = wheels;
        this.image = image;
    }
}

function getVehiclePosition(arr, vehicle) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === vehicle.name) return i;
    }
    return -1;
}

function setVehicleToCompare(el, vehicle) {
    if (vehicle instanceof VehicleModel) {
        if (el.checked) {
            if (vehiclesToCompare.length >= 2) {
                alert("Você já selecionou 2 carros. Desmarque um para trocar.");
                el.checked = false;
                return;
            }
            vehiclesToCompare.push(vehicle);
        } else {
            const pos = getVehiclePosition(vehiclesToCompare, vehicle);
            if (pos !== -1) vehiclesToCompare.splice(pos, 1);
        }
    } else {
        throw "Você precisa definir uma Classe VehicleModel";
    }
}

function showCompare() {
    if (vehiclesToCompare.length < 2) {
        alert("Você precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    updateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function hideCompare() {
    document.getElementById("compare").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".pagina__fotos__checkbox").forEach((checkbox) => {
        checkbox.checked = false;
    });
    vehiclesToCompare = [];
});

function formatPrice(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

function updateCompareTable() {
    for (let i = 0; i < 2; i++) {
        const item = vehiclesToCompare[i];

        document.getElementById(`compare_image_${i}`).innerHTML =
            `<img src="${item.image}" alt="${item.name}" style="max-width:100px">`;
        document.getElementById(`compare_modelo_${i}`).textContent = item.name;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = item.bedHeight;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = item.vehicleHeight;
        document.getElementById(`compare_alturasolo_${i}`).textContent = item.groundClearance;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = item.loadCapacity;
        document.getElementById(`compare_motor_${i}`).textContent = item.engine;
        document.getElementById(`compare_potencia_${i}`).textContent = item.power;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = item.bedVolume;
        document.getElementById(`compare_roda_${i}`).textContent = item.wheels;
        document.getElementById(`compare_preco_${i}`).textContent = formatPrice(item.price);
    }
}
