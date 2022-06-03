//Object.entries
const data = {
    frontend: "Oscar",
    backende: "Isabella",
    design: "Ana",
}
 
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object.values
const data2 = {
    frontend: "Pascal",
    backend: "Elcira",
    design: "Paola",
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);

//Padding
const string = "La tierra les dice Hola!!";
console.log(string.padStart(49, "Buenos dias estrellitas "));
console.log("Boys don't cry".padEnd(23, " The Cure"));

//Asyn Await
//Forma #1
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Pascal Cadena"), 3000)
        : reject(new Error("Test Error"))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};
helloAsync();

//Forma #2
const anotherFunction = async () => {
    try {
        const hellos = await helloWorld();
        console.log(hellos);
    } catch (error) {
        console.log(error);
    }
};
anotherFunction();
