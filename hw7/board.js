export let Board = class {
    constructor() {
        this.columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    render() {
        let board = document.getElementById('board');

        for (let i = 0; i < this.rows.length; i++) {
            for (let j = 0; j < this.columns.length; j++) {
                let cell = document.createElement('div');
                cell.id = this.columns[j] + '-' + this.rows[i];
                cell.className = 'cell';
                board.appendChild(cell);
            }
        }
    }
}