import { Human } from './human.js'

export class Student extends Human {
    constructor(name, surname, age) {
        super(name, surname, age)
    }

    setJob(value) {
        this._job = this.name + ' ' + value;
    }

    getJob() {
        return 'Student ' + this._job;
    }
}