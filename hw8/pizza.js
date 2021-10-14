export let Pizza = class {
    constructor(type, price) {
        this.id = 0;
        this.type = type;
        this.price = price;
    }

    addIngridients(ingridients) {
        this.ingridients = ingridients;

        if (ingridients != null && ingridients.length > 0) {
            for (let i = 0; i < ingridients.length; i++) {
                price += ingridients[i].price;
            }
        }
    }
}

export let pizzaTypes = ['Small', 'Middle', 'Giant'];
export let pizzaSizes = ['200g', '350g', '500g'];
export let pricesPizza = [50, 100, 150];
export let ingridients = ['Tomato', 'Cheese', 'Mashrooms'];
export let priceIngridients = [5, 10, 15];
export let imgs = ['https://images.pizza33.ua/products/menu/0QK5q6XT3CHbgoRhWOZZTVMy7KQSpWNs.jpg',
    'https://images.pizza33.ua/products/product/RgrUoUvcLNB1dPmPlutjlN2EZ6tSo4z5.jpg',
    'https://artpizza.com.ua/media/cache/0f/f2/0ff2f153800e6dd7e2ba7ae58805326c.jpg'];