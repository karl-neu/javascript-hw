export let Basket = class {
    constructor() {
        this.orders = [];
        this.counterId = 0;
        this.price = 0;
    }

    add(pizza) {
        pizza.id = ++this.counterId;
        this.price += pizza.price;
        this.orders.push(pizza);
    }

    deletePizza(pizzaId) {
        let pizza = this.orders.find(({ id }) => {
            if (id === pizzaId) return this;
        });

        let pos = this.orders.indexOf(pizza);
        this.orders.splice(pos, 1);
        this.countPrice();
    }

    countPrice() {
        this.price = 0;
        for (const iterator of this.orders) {
            this.price += iterator.price;
        }
    }
}