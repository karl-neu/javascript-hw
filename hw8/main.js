import { Pizza, pizzaTypes, pizzaSizes } from './pizza.js';

let pizzas = [];

function setCurrentPizza(pizzaType, pizzaSize) {
    localStorage.setItem('pizzaTypeForOrder', pizzaType);
    localStorage.setItem('pizzaSizeForOrder', pizzaSize);
}

let btns = document.getElementsByClassName('pizzaButton');

for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        console.log(e);
        setCurrentPizza(e.target.previousElementSibling.previousElementSibling.innerText, e.target.previousElementSibling.innerText);
    })
}

let basket = JSON.parse(localStorage.getItem('basket'));
let badge = document.getElementById('basketBadge');
badge.innerText = ((basket == null) ? 0 : basket.orders.length);

let btnOrders = document.getElementById('btnOrders');
btnOrders.addEventListener('click', () => {
    location.assign('./orders.html');
}, false);