const button = document.getElementById("btn"); //Llamar el boton para asignarle un evento

button.addEventListener("click", async function () { //Escuchar algun cambio o accion que se va a hacer en el boton
    const module = await import("./file.js"); //El import se hace dentro del llamado al boton para que espere a la accion y llamar al modulo o lo que se importa
    module.hello(); //Se acciona solo cuando se le da "click" al boton

});

//BigInt
const aBigNumber = 1111539139n; //Activar la funcion bigint
const anotherBigNumber = BigInt(1111539139);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise all settled
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));
//Promise.all => no se resuelve si una de las promesas no se ejecuta
Promise.allSettled([promise1, promise2, promise3]) //Se ejecuta sin importar el estado de las promesas solo espera a que todas se resuelvan
.then(response => console.log(response));

//global this
console.log(window);
console.log(globalThis);

//Nullish coalescing operator ??
const foo = null ?? "default string"; // devuelve el string
console.log(foo);

const foo2 = "pascal" ?? "default string2" //devuelve el valor derecho, porque no es null
console.log(foo2);

//Optional chaining
const user = {};
console.log(user?.profile?.email); // leer hasta el nivel donde esta "?" para que no devuelva un error y no rompa el codigo. devuelva undefined.

if (user?.profile?.email) {
    console.log(email);
} else {
    console.log("fail!!");
}