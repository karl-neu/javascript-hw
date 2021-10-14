import { Basket } from "./basket.js";
import { Pizza } from './pizza.js'

let ordersDiv = document.getElementById('orders');
let basketJson = localStorage.getItem('basket');

if (basketJson == null) {
    ordersDiv.innerText = 'You nothing choose.'
} else {
    let bskt = JSON.parse(basketJson);
    let basket = new Basket();
    let caption = document.createElement('caption');

    basket = mapper(bskt);
    console.log(basket);

    let table = document.createElement('table');
    table.className = 'table';
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.setAttribute('scope', 'col');
    th.innerText = '#';
    let th2 = document.createElement('th');
    th2.setAttribute('scope', 'col');
    th2.innerText = 'Title';
    let th3 = document.createElement('th');
    th3.setAttribute('scope', 'col');
    th3.innerText = 'Price';
    let th4 = document.createElement('th');
    th4.setAttribute('scope', 'col');
    th4.innerText = 'Remove';
    tr.append(th, th2, th3, th4);
    thead.appendChild(tr);
    table.appendChild(thead);


    let tbody = document.createElement('tbody');
    for (let pizza of basket.orders) {

        let trow = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = pizza.id;
        let td2 = document.createElement('td');
        td2.innerText = pizza.type;
        let td3 = document.createElement('td');
        td3.innerText = pizza.price;
        let td4 = document.createElement('td');
        let btn = document.createElement('button');

        btn.addEventListener('click', (e) => {
            let pizzaId = parseInt(e.path[2].children[0].innerText);

            basket.deletePizza(pizzaId);
            localStorage.setItem('basket', JSON.stringify(basket));
            e.path[2].remove();
            caption.innerText = 'Cash: ' + basket.price;
        }, false);

        btn.innerText = 'Del';
        btn.className = 'btn btn-danger'
        td4.appendChild(btn);

        trow.append(td, td2, td3, td4);
        tbody.appendChild(trow);
    }
    table.appendChild(tbody);

    caption.innerText = 'Cash: ' + basket.price;
    table.appendChild(caption);
    ordersDiv.appendChild(table);
}

function mapper(basketStr) {
    let bst = new Basket();
    bst.orders = basketStr.orders;
    bst.counterId = basketStr.counterId;
    bst.price = basketStr.price;
    return bst;
}

(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    localStorage.removeItem('basket');
                    alert('Congratulation! Have a nice day.');
                }

                form.classList.add('was-validated')
            }, false)
        })
})()