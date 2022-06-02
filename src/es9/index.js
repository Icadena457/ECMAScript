//Operador de resposo
const obj = {
    name: "Isabella",
    age: 18,
    country: "COL",
};

let { name, ...all } = obj;
console.log(name, all);

// Propiedades de propagacion 
const objPropagacion = {
    name: "Elcira",
}
const objPropagacion2 = {
    ...objPropagacion,
    age: 45,
    country: "COL",
};
console.log(objPropagacion2);

//.finally
const  helloWorld2 = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Paola Cadena"), 3000)
        : reject(new Error("Test Error"))
    })
};

helloWorld2()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizo la ejecucion"))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);