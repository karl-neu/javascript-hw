import { pizzaTypes, pizzaSizes, imgs, pricesPizza, priceIngridients, ingridients, Pizza } from './pizza.js';
import { Basket } from './basket.js';

let type = localStorage.getItem('pizzaTypeForOrder');
let size = localStorage.getItem('pizzaSizeForOrder');

let img = document.getElementById('imgForPizza');
let titlePizza = document.getElementById('titlePizza');
let descriptionPizza = document.getElementById('descriptionPizza');
let pricePizza = document.getElementById('price');

let pos;
switch (type) {
    case pizzaTypes[0]:
        pos = 0;
        break;
    case pizzaTypes[1]:
        pos = 1;
        break;
    case pizzaTypes[2]:
        pos = 2;
        break;
    default:
        break;
}

img.src = imgs[pos];
titlePizza.innerText = pizzaTypes[pos];
descriptionPizza.innerText = pizzaSizes[pos];
pricePizza.innerText = pricesPizza[pos];

let ingridientsDiv = document.getElementById('ingridients');

for (let i = 0; i < ingridients.length; i++) {
    ingridientsDiv.appendChild(createCheckbox(ingridients[i], priceIngridients[i]));

}

function createCheckbox(name, price) {
    let div = document.createElement('div');

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = name;
    input.name = price;
    input.addEventListener('change', (e) => {
        let price = parseInt(pricePizza.innerText, 10);

        if (e.target.checked)
            price += parseInt(e.target.name);
        else
            price -= parseInt(e.target.name);

        pricePizza.innerText = price;
    });

    let label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML = name;

    div.appendChild(input);
    div.appendChild(label);
    return div;
}

let badge = document.getElementById('basketBadge');
let basket2 = JSON.parse(localStorage.getItem('basket'));
badge.innerText = ((basket2 == null) ? 0 : basket2.orders.length);

let btnOrders = document.getElementById('btnOrders');
btnOrders.addEventListener('click', () => {
    location.assign('./orders.html');
}, false);

let btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', (e) => {
    let basketJson = localStorage.getItem('basket');
    let pizza = new Pizza(titlePizza.innerText, parseInt(pricePizza.innerText));
    let json;

    if (basketJson == null) {
        let bskt = new Basket();
        bskt.add(pizza)
        json = JSON.stringify(bskt);
    } else {
        let basket = JSON.parse(basketJson);

        let bst = new Basket();
        bst = mapper(basket);
        bst.add(pizza);

        json = JSON.stringify(bst);
    }

    localStorage.setItem('basket', json);
    console.log(json);

}, false);

function mapper(basketStr) {
    let bst = new Basket();
    bst.orders = basketStr.orders;
    bst.counterId = basketStr.counterId;
    bst.price = basketStr.price;
    return bst;
}