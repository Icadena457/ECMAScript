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
