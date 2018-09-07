/*
function hello() {
    console.log("hello");
}

function loop(times = 0, callback = null) {
    if (callback){
        for (let i = 0; i < times; i++){
            callback();
        }
    }
}


loop(5, hello); // выполняется 5 раз
loop(5);        // не выполняется ни разу
loop();         // не выполняется




function calculateArea({name:figure,params:input}) {

      function squareAreaCalc(length) {
        return length*length;
    }

    function rectangleAreaCalc(sideA = 0, sideB = 0) {
        return sideA*sideB;
    }

    function circleAreaCalc(radius) {
        return Math.PI*radius*radius;
    }

    switch (figure){
        case 'square':
            area = squareAreaCalc(input);
            break;
        case 'rectangle':
            area = rectangleAreaCalc(...input);
            break;
        case 'circle':
            area = circleAreaCalc(input);
            break;
        default:
            console.error('Unknown figure!');
    }
    return {area: area, figure:figure, input:input};
}

let square = {
    name: 'square',
    params : 5
};

let rectangle = {
    name: 'rectangle',
    params : [5, 2]
};

let circle = {
    name: 'circle',
    params : 3
};

console.log(calculateArea(square));
console.log(calculateArea(rectangle));
console.log(calculateArea(circle));


*/

class Human {
    constructor(name, age, dateOfBirth){
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo(){
        return `Name ${this.name}, Age: ${this.age}, Data of birth: ${this.dateOfBirth}`;
    }
}

class Employee extends Human{
    constructor(name, age, dataOfBirth, salary, department){
        super(name, age, dataOfBirth);
        this.salary = salary;
        this.department = department;

    }

    displayInfo(){
        return super.displayInfo() + `\nSalary: ${this.salary}, department: ${this.department}`;
    }
}



class Manager extends Employee{
    constructor(name, age, dataOfBirth, salary, department){
        super(name, age, dataOfBirth, salary, department);
        this.developers = [];
    }
    displayInfo(){

        return super.displayInfo() + `\n Developers: ${this.developers.map((dev)=>{return dev.name}).join(',')}`;
    }
    addDeveloper(developer){
        let index = this.developers.indexOf(developer);

        if (index === -1){
            this.developers.push(developer);

        }

    }
    removeDeveloper(developer){
        let index = this.developers.indexOf(developer);

        if (index >= 0){
            this.developers.splice(index,1);


        }
    }
}

class Developer extends Employee{
    constructor(name, age, dataOfBirth, salary, department, manager){
        super(name, age, dataOfBirth, salary, department);
        this.manager = manager;
        this.manager.addDeveloper(this);
    }
    displayInfo(){
        return super.displayInfo() + `\n Manager: ${this.manager.name}`;
    }

    changeManager( manager){
        this.manager.removeDeveloper(this);
        this.manager = manager;
        this.manager.addDeveloper(this);
    }
}


/*
let testHum = new Human('egor', 26, '05/07/1992');
let testHum2 = new Human('RTH', 52, '08/07/1992');
console.log(testHum);
console.log(testHum.displayInfo());
console.log(testHum2.displayInfo());

let testEmp = new Employee('egor', 26, '05/07/1992', 65000, 'oaizi');
let testEmp2 = new Employee('RTH', 52, '08/07/1992', 20000, 'PO & SOD');
console.log(testEmp);
console.log(testEmp.displayInfo());
console.log(testEmp2.displayInfo());
*/
console.log(`
create manager

`);
let managerOne = new Manager('One',36,'12.05.2018',50000,'ziku');
let managerTwo = new Manager('Two',45,'12.06.2019',100000,'ziku');

console.log(managerOne.displayInfo());
console.log(managerTwo.displayInfo());

console.log(`
create devs

`);
let devOne = new Developer('devOne', 45,'15.1.2014',30000,'xiku',managerOne);
console.log(devOne.displayInfo());
let devTwo = new Developer('dev2', 19,'14.10.1992',35000,'xiku',managerOne);
console.log(devTwo.displayInfo());

let devThree = new Developer('dev3', 25,'05.07.1992',60000,'xiku',managerTwo);
console.log(devThree.displayInfo());
let devFour = new Developer('dev4', 50,'14.10.1985',35000,'xiku',managerTwo);
console.log(devFour.displayInfo());
console.log(`
managers first

`);
console.log(managerOne.displayInfo());
console.log(managerTwo.displayInfo());
devThree.changeManager(managerOne);

console.log(`
managers after changing

`);
console.log(managerOne.displayInfo());
console.log(managerTwo.displayInfo());

console.log(`
managers after 2

`);

devThree.changeManager(managerOne);
console.log(managerOne.displayInfo());
console.log(managerTwo.displayInfo());


/*Hometask 4*/

function fillingForm() {
    let text = document.createElement()
}


function fillForm(){
    let start = document.getElementById('start');
    start.parentNode.removeChild(start);
}

document.addEventListener("DOMContentLoaded", () =>{
   let start = document.getElementById('start');
   start.addEventListener('click', fillForm);
});
