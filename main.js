let products = [
    {
        product: "Nescafé dolca suave",
        price: 3299,
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
    }
]


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

    inputs[i].value = "";

    // Insertar el total de la compra en HTML
    const totalText = document.getElementById("total");
    let acumulador = 0;
    for (let i = 0; i < pricesArray.length; i++) {
        acumulador += pricesArray[i];
    }
    totalText.innerHTML = `$${acumulador}`
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => getValue(i));
}


// Productos en descuento

function discount (product) {
    return product - (product * 20 / 100)
}

function showDiscountProducts () {
    const container = document.getElementById("discount-products");

    for (let i = 0; i < 4; i++) {
        const product = products[i];
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
            <img src="${product.image}" />
            <h3>${product.product}</h3>
            <p>$${Math.floor(discount(product.price))}</p>
        `

        if (container) { container.appendChild(div) }
    }
}

showDiscountProducts();