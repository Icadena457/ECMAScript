//Operador de reposo
var arr1 = [1,2,3, [1,2,3, [1,2,3]]];
console.log(arr1.flat(3));

//flat.map
var arr2 = [1,2,3,4,5,6];
console.log(arr2.flatMap(value => [value, value * 2]));

// trimStart
let ej1 = "    Pascal Cadena";
console.log(ej1);;
console.log(ej1.trimStart());
// trimEnd
let ej2 = "Pascal Cadena    ";
console.log(ej2);;
console.log(ej2.trimEnd());

//Optional catch biding
//Antes
try {

} catch (error) {
    error
}
//Ahora:
try {

} catch {
    error
}

//fromEntries
let entries = [ ["name", "Pascal"], ["age", 6]];
console.log(Object.fromEntries(entries));

//Objeto de tipo simbolo
let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);