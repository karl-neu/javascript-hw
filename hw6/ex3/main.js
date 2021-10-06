class Calendar {
    today;
    containerDiv;

    constructor() {
        this.containerDiv = document.getElementById('container');
        this.today = new Date();
    }

    #getWeekday(date) {
        let options = { weekday: 'long' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    #getNumberDaysOfThisMonth() {
        return new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    }

    render() {
        this.containerDiv.innerHTML = '';

        //month title section
        let monthTitle = document.getElementById('monthTitle');

        let optionMonth = { month: 'long' };
        monthTitle.innerText = this.today.getFullYear() +
            '/' + (this.today.getMonth() + 1) +
            ' (' + new Intl.DateTimeFormat('en-US', optionMonth).format(this.today) + ')';
        //--

        let table = document.createElement('table');
        let tHead = document.createElement('thead');
        let tBody = document.createElement("tbody");

        //week day section
        let trh = document.createElement('tr');

        let dayOfWeek = new Date(this.today);

        for (let i = 0; i < 7; i++) {
            let th = document.createElement('th');
            dayOfWeek.setDate(i + 1);
            th.innerText = this.#getWeekday(dayOfWeek);
            trh.appendChild(th);
        }

        tHead.appendChild(trh);
        table.appendChild(tHead);
        //--

        let monthDays = this.#getNumberDaysOfThisMonth();
        let counter = 1;

        for (let i = 0; i < 6; i++) {
            let tr = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                if (counter > monthDays) break;

                let td = document.createElement('td');
                td.innerText = counter++;
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        this.containerDiv.appendChild(table);
    }

    prev() {
        this.today.setMonth(this.today.getMonth() - 1);
        this.render();
    }

    next() {
        this.today.setMonth(this.today.getMonth() + 1);
        this.render();
    }
}

let cal = new Calendar();

let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');

btnNext.addEventListener('click', (e) => {
    cal.next()
})

btnPrev.addEventListener('click', (e) => {
    cal.prev()
})

cal.render();