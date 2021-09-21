import { Human } from './human.js';
import { Student } from './student.js';

let human = new Human('Olga', 'Ivanuk', 22);
human.setJob('live');

let student = new Student('Vitalik', 'Semechkin', 17);
student.setJob('study');

console.log(human, student);
console.log(human.getJob(), student.getJob());