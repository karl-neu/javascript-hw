import { ShipsSetup } from './shipsSetup.js';
import { Board } from './board.js';
import { Ship } from './ship.js'

let board = new Board();
board.render();

let shipsSetup = new ShipsSetup();
shipsSetup.render();

let boardShips = [];
let choosedShip = '';

let ships = document.getElementsByClassName('setupShip');
for (let ship of ships) {
    ship.addEventListener('click', function (e) {
        if (choosedShip === '') {
            choosedShip = this.id;
            this.style.backgroundColor = 'gray';
        }
        else if (choosedShip === this.id) {
            choosedShip = '';
            this.style.backgroundColor = 'cadetblue';
        } else {
            let selectedShip = document.getElementById(choosedShip);
            selectedShip.style.backgroundColor = 'cadetblue';
            this.style.backgroundColor = 'gray';
            choosedShip = this.id;
        }
    });
}

let cells = document.getElementsByClassName('cell');

function isShipWithCurrentName(ship) {
    return ship.title === choosedShip;
}

for (let cell of cells) {
    cell.addEventListener('click', function (e) {
        if (cell.style.cursor != "no-drop"
            || cell.style.backgroundColor != "purple"
            && !cell.cursor.classList.contains('ship')) {

            if (!boardShips.find(isShipWithCurrentName)) {
                boardShips.push(new Ship(cell.id, getCountCellByShipId(choosedShip), choosedShip));
                paintCells(cell);

                let ship = document.getElementById(choosedShip);
                ship.classList.add('choosedShip');
            }
        }
    });

    cell.addEventListener('mouseout', function (e) {

        if (cell.style.cursor == "no-drop") {
            if (!cell.classList.contains("ship")) {
                cell.style.cursor = "default";
            }

        }
    });

    cell.addEventListener('mouseover', function (e) {

        if (!enoughSpace(this.id)) {
            cell.style.cursor = "no-drop";
        }
    });
}

function paintCells(cell) {
    let position = cell.id;

    let colSymbol = position.substring(0,
        position.length - ((position.length == 4) ? 3 : 2));
    let col = board.columns.indexOf(colSymbol);

    let row = parseInt(position.substring(2,
        position.length), 10);

    let colStart = (col == 0 ? 0 : col - 1);

    let count = getCountCellByShipId(choosedShip);

    let colFinish = ((col + count) > 9 ? col + count - 1 : col + count);


    let rowStart = (row == 1 ? row : row - 1);
    let rowFinish = (row == 10 ? row : row + 1);

    for (let i = rowStart; i <= rowFinish; i++) {
        for (let j = colStart; j <= colFinish; j++) {
            let el = document.getElementById(board.columns[j] + '-' + i);

            if (row == i && col <= j && j < col + count)
                el.style.backgroundColor = 'purple';

            el.style.cursor = 'no-drop';
            el.classList.add('ship');
        }
    }
}

function enoughSpace(position) {
    let count = getCountCellByShipId(choosedShip);

    if (choosedShip === '' || count === 0) return false;

    let poscol = position.substring(0,
        position.length - ((position.length == 4) ? 3 : 2));

    let col = board.columns.indexOf(poscol);

    let row = parseInt(position.substring(2,
        position.length), 10);

    if ((col + count) >= 11) {
        return false;
    }

    for (let i = col; i < col + count; i++) {
        let el = document.getElementById(board.columns[i] + '-' + row);
        if (el.classList.contains('ship')) {
            return false;
        }
    }

    return true;
}

function getCountCellByShipId(shipId) {
    let type = shipId.substring(0, shipId.length - 1);

    switch (type) {
        case shipsSetup.types[0]:
            return 4;
            break;
        case shipsSetup.types[1]:
            return 3;
            break;
        case shipsSetup.types[2]:
            return 2;
            break;
        case shipsSetup.types[3]:
            return 1;
            break;
        default:
            return 0;
            break;
    }
}