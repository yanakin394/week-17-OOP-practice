
class Worker {
    constructor (name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    }
    getSalary() {
        return this.rate * this.days
    }
}
let worker = new Worker('Петя', "Петров", 10, 31);
console.log(worker.name); 
console.log(worker.surname); 
console.log(worker.rate); 
console.log(worker.days);
console.log(worker.getSalary());

let secondWorker = new Worker('Alan', 'Smith', 15, 30);
console.log(secondWorker.name); 
console.log(secondWorker.surname); 
console.log(secondWorker.rate); 
console.log(secondWorker.days);
console.log(secondWorker.getSalary());

// еще немного практикуюсь создавать классы
class Dog {
    constructor(breed, name, color, owner) {
        this.breed = breed;
        this.name = name;
        this.color = color;
        this.owner = owner;
    }
    getMove() {
        return 'barks very loud'
    }
}
let dog = new Dog('terrier', 'Spike', 'white', 'Alicia');
console.log(dog.breed); 
console.log(dog.name); 
console.log(dog.color); 
console.log(dog.owner); 
console.log(dog.getMove());

let currentYear = new Date();
console.log(currentYear.getFullYear());
class Student {
    constructor(name, surname, major, educationYear, courseTerm) {
        this.name = name;
        this.surname = surname;
        this.major = major;
        this.year = educationYear;
        this.term = courseTerm;
    }
    getGraduationDate() {
        return currentYear.getFullYear() + (this.term - this.year)
    }
}
let student = new Student('Alan', 'Wasinsky', 'Computer Science', 2, 5);
console.log(student.name);
console.log(student.getGraduationDate());

let studentB = new Student('Kevin', 'Hope', 'English Literature', 1, 6);
console.log(studentB.major);
console.log(studentB.getGraduationDate());