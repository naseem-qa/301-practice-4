'use strict';
let fileJson = require('./a.json')
let allInfo = new ReadJs(fileJson)
//Read in the contents of a .json file with the contents
function ReadJs(data) {
    this.name = data.name;
    this.pets = data.pets;
    this.children = JSON.stringify(data.children);
    this.job = data.job;
}

//Output a list of each property of the object and it's value, separated by a colon. For example:

name: John
ReadJs.prototype.render = function () {
    console.log(`name: ${this.name},
    \n pets: ${this.pets}
    \n children: ${this.children},
    \n job: ${this.job}\n\n\n`);

    // let array = []
    // Object.keys(ReadJs).forEach(element => {
    //     array.push(`${key}:${ReadJs[key]}`) 
    // });
    // console.log(array)
};
//Output a list (array) of all pets that start with the letter 'R'
allInfo.render()
let arr = allInfo.pets

var petsR = (letter ) => {
    return arr.filter(element => element.indexOf(letter ) > -1);
}
console.log( petsR('R'));


// Object.keys(ReadJs).forEach(element => {
//     const petsR = arr => arr.filter(el => /^[R]/.test(el));
// });

//Create a new instance of "Person" for each child, with the properties "name" and "age
function Person(name, age) {
    this.name = name
    this.age = age
    this.dogAge = age*7
    Person.all.push(this)
}
Person.all = []

let zach = new Person(Object.keys(fileJson.children)[0], Object.values(fileJson.children)[0].age)
let allie = new Person(Object.keys(fileJson.children)[1], Object.values(fileJson.children)[1].age)

//Create a method for a Person instance that outputs their age in dog years (their current age * 7)
Person.prototype.dogYear = function () {
    let dogAge = this.age * 7
    console.log(` ${dogAge}`);
}

zach.dogYear();
allie.dogYear();

console.log(Person.all);




// $.get('./a.json')
// .then(data =>{
//     data.forEach(element => {
//         let readJson = new ReadJs(element);
//         readJson.render();
//     });
// });