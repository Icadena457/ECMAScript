// Parametros por defecto
// Antes:
function newFunction(name, age, country) {
    var name = name || "Pascal";
    var age = age || 4;
    var country = country || "Colombia";
    console.log(name, age, country);
}

//Ahora:
function newFunction2(name = "Isabella", age = 18, country = "Colombia") {
    console.log(name, age, country);
}
//Llamado
newFunction();
newFunction2();

// template literals
//Antes
let hello = "Hello";
let world = "World"; 
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
//Ahora
let hello2 = "Pascal";
let world2 = "Cadena";
let epicPhrase2 = `${hello2} ${world2}`;
console.log(epicPhrase2);

//Multilinea
//Antes:
let lorem = "nineiognwpongoprwngopef \n" + "Esta es otra linea 1";
//Ahora:
let lorem2 = `Segunda frase
tercera frase solo dando enter y con comillas francesas`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion de elementos
//antes:
let person = {
    name: "Isabella",
    age: 18,
    country: "Colombia",
}
console.log(person.name, person.age, person.country);
//Ahora:
let person2 = {
    name: "Pascal",
    age: 5,
    country: "Colombia",
}
let { name, age, country} = person2;
console.log(name, age, country);

//Operador de propagacion
//Antes:
let team1 = ["Paola", "Isabella", "Maria"];
let team2 = ["Jimena", "Pascal", "Manolo"];

let estudio = ["David", "Paola", "Isabella", "Maria", "Jimena", "Pascal", "Manolo"];
console.log(estudio);
//Ahora:
let team3 = ["Jimena", "Pascal", "Manolo"];
let team4 = ["Paola", "Isabella", "Maria"];

let education = ["david", ...team3, ...team4];
console.log(education);

//let
{
    var global = "Scope global";
}
console.log(global);
{
    let local = "Scope local";
    console.log(local);
}

//Const
const a = "Pascal";
// a = "Manolo"; => No se puede reasignar 
console.log(a);

//Propiedad de objetos
//Antes:
obj = { name: name, age: age, };
//Ahora:
obj2 = { name, age };
console.log(obj2);

//Arrow function
//Antes:
const names = [
    { name: "Daniela", age: 18 },
    { name: "Pedro", age: 20 },
]
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//Ahora:
const names2 = [
    { name: "Paola", age: 34 },
    { name: "Ana", age: 38 },
]
let listOfNames2 = names2.map(item => console.log(item.name));
//Arrow function 2
let listOfNames3 = (name, age, country) => {
 //Bloque de codigo
}
//Arrow function 3
let listOfNames4 = name => {
 //Bloque de codigo
}
//Arrow function 4
let square = num => num * num;

//Promesas 
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Bien!!");
        } else {
            reject("Mal!!");
        }
    });
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

// Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2, 2));

//Import y Export
import { hello } from "./module.js";

hello();

//Generators
function* helloWorld() {
    if (true) {
        yield "Pascal Cadena";
    }
    if (true) {
        yield "Paola Cadena";
    }
    if (true) {
        yield "Elcira Cadena";
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);