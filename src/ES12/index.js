//Replace all
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python"); //1p: palabra que se quiere cambiar, 2p palabra por la que se quiere cambiar
console.log(replacedString); //Con "replace" solo encontraba el primer elemento y lo reemplazaba.

const replacesAllString = string.replaceAll("JavaScript", "Python"); //replacedAll coge todas las coincidencias dentro del string seran reemplazadas
console.log(replacesAllString);

//Metodos privados
//Publico
class Message{
    show(val) {
        console.log(val);
    }
}

const message = new Message();
message.show("Pascal");
//Privado
class Message{
    #show(val) {
        console.log(val);
    }
    get #add(){
        //...
    }
}

//Promise any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
 .then(response => console.log(response));

//weakRef 
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
}

//nuevos operadores logicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = undefined;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);