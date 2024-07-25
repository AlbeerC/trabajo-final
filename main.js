let products = [
    {
        product: "Nescafé dolca suave",
        price: 3799,
        stock: 15,
        image: "assets/nescafe-dolca.webp"
    },
    {
        product: "Sal fina celusal",
        price: 1399,
        stock: 22,
        image: "./assets/sal-fina.webp"
    },
    {
        product: "Shampoo sedal 650ml",
        price: 3700,
        stock: 13,
        image: "./assets/shampoo-sedal.webp"
    },
    {
        product: "Queso untable finlandia 180g",
        price: 2000,
        stock: 8,
        image: "./assets/queso-finlandia.webp"
    },
    {
        product: "Coca cola 2.25L",
        price: 2500,
        stock: 34,
        image: "./assets/coca-cola.webp"
    },
    {
        product: "Monster energy ultra 473ml",
        price: 1700,
        stock: 30,
        image: "./assets/monster-ultra.webp"
    },
    {
        product: "Pan de mesa bimbo 550g",
        price: 3300,
        stock: 16,
        image: "./assets/bimbo-mesa.webp"
    },
    {
        product: "Pan de hamburguesa bimbo X4 U",
        price: 2200,
        stock: 12,
        image: "./assets/bimbo-hamburguesa.webp"
    },
    {
        product: "Dulce de leche ilolay 400g",
        price: 2100,
        stock: 27,
        image: "./assets/ddl-ilolay.webp"
    },
    {
        product: "Aceite mezcla cocinero 900cc",
        price: 1700,
        stock: 19,
        image: "./assets/aceite-cocinero.webp"
    },
    {
        product: "Aceite en aerosol natura",
        price: 2200,
        stock: 21,
        image: "./assets/aceite-natura.webp"
    },
    {
        product: "Mayonesa natura 250g",
        price: 850,
        stock: 18,
        image: "./assets/mayonesa.webp"
    },
    {
        product: "Galletitas Oreo rellenas sabor original 354G",
        price: 3200,
        stock: 25,
        image: "./assets/oreo-tri.webp"
    },
    {
        product: "Yerba suave playadito 1kg",
        price: 3700,
        stock: 40,
        image: "./assets/yerba-playadito.webp"
    },
    {
        product: "Arroz blanco Molinos Ala 1kg",
        price: 1700,
        stock: 33,
        image: "./assets/arroz-blanco.webp"
    },
    {
        product: "Galletitas chocolinas original 250g",
        price : 1300,
        stock: 30,
        image: "./assets/chocolinas.webp"
    }
]

// Aplicar 20% de descuento a un producto tomado por parámetro
function applyDiscount (product) {
    return product - (product * 20 / 100)
}

// Crear la card de los cuatro productos con descuento e insertarlas en el index.html
function showDiscountedProducts () {
    const container = document.getElementById("discount-products");

    for (let i = 0; i < 4; i++) {
        const item = products[i];
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
            <img src="${item.image}" />
            <h3>${item.product}</h3>
            <p>$${Math.floor(applyDiscount(item.price))} <span>$${item.price}</span></p>
        `

        if (container) { container.appendChild(productCard) }
    }
}

showDiscountedProducts();

// Crear la carta de cada producto e insertarlas en products.html
function createProductCard () {
    const container = document.getElementById("products-list");

    products.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
            <img src="${item.image}" />
            <h3>${item.product}</h3>
            <p>$${item.price}</p>
            <div class="finish-buy">
                <input type="number" class="input" placeholder="cantidad" min="0">
                <button class="btn" type="submit">Comprar</button>
            </div>
        `

        if (container) { container.appendChild(productCard) }
    });
}

createProductCard();


// Lógica para verificar si hay suficiente stock del producto que el usuario quiera comprar
const inputs = document.querySelectorAll('.input');
const buttons = document.querySelectorAll('.btn');
let pricesArray = [];

function getValue (i) {
    const inputValue = inputs[i].value;
    const productStock = products[i].stock;
    const productName = products[i].product;
    const productPrice = products[i].price;

    if (inputValue <= 0) {
        alert("La cantidad ingresada no es válida");
    } else if (inputValue > productStock) {
        alert("No tenemos suficiente stock del producto");
    } else {
        alert(`Agregado ${inputValue} ${productName}. Total: $${inputValue * productPrice}`);
        pricesArray.push(inputValue * productPrice);
    }

    // Después de clickear un botón y mostrar la alerta, se limpia el input para que vuelva a estar vacío
    inputs[i].value = "";

    // Insertar el total de la compra en HTML
    const totalText = document.getElementById("total");
    let acc = 0;
    for (let i = 0; i < pricesArray.length; i++) {
        acc += pricesArray[i];
    }
    totalText.innerHTML = `$${acc}`
}

// Recorremos todos los botones y usamos el índice como argumento para la función
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => getValue(i));
}