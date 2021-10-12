export let ShipsSetup = class {
    types;
    shipsContainer;

    constructor() {
        this.types = ['Battleship', 'Cruiser', 'Destroyer', 'TorpedoBoat'];
        this.shipsContainer = document.getElementById('ships-container');
    }

    addShips(arr) {
        for (let ship of arr) {
            this.shipsContainer.appendChild(ship);
        }
    }

    createShips(typeBoat, count = 1) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            let ship = document.createElement('div');
            ship.id = typeBoat + (i + 1);
            ship.className = 'setupShip';
            arr.push(ship);
        }
        return arr;
    }

    render() {
        this.addShips(this.createShips(this.types[0]));
        this.addShips(this.createShips(this.types[1], 2));
        this.addShips(this.createShips(this.types[2], 3));
        this.addShips(this.createShips(this.types[3], 4));
    }

}