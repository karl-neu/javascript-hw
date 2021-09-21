export class Human {
    _job = '';

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    setJob(value) {
        this._job = value;
    }

    getJob() {
        return this._job;
    }
}