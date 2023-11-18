// operadores de asignacion
console.log("//Operdores de asigancion//");
let nombre;
nombre = 'Andres';
let nombreCompleto = nombre = "Carlos";
console.log(nombre);
console.log(nombreCompleto);

// operadores de aritmeticos binarios
console.log("//Operdores aritmeticos binarios//");
console.log(2+2*2); //6
console.log((2+2)*2); //8
const x = 2;
const y = 3;
console.log(x**y);

// operadores de aritmeticos unarios
console.log("//Operdores aritmeticos unarios//");

let str = 1;
let n1 = +str;
let n2 = -str
let n3 = -n2
let n4 = 3;
n1 +=  n4;

console.log(str--);
//1. console.log(str)
//2. str = str + 1
console.log(--str);
//1. str = str + 1
//1. console.log(str)

//decimales
console.log(0.2 + 0.1);

//Operadores de asignacion
console.log("//Operdores de asignacion//");

let z = 0;
z += 100;
// z = z + 100
console.log(z);
z += 50;
console.log(z);
z -= 70;
console.log(z);
z /= 2;
console.log(z);
z **=2;
console.log(z);

//Operadores logicos
console.log("//Operadores logicos//");

console.log(true && true); //true
console.log(true && false); //false

console.log(true || false); //true
console.log(false || false); //false

console.log(true); //true
console.log(!true); //false
console.log(!false); //true


const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b ); //false
console.log(a && b && c || d ); // true


let year = '';
console.log(!year);

console.log(false && 1991);
console.log(true || 1991);

let l = 0;
let j = 0;

console.log(l++ || j++ );
console.log(l);
console.log(j);


let n = true;
console.log(n);
n ||= false
console.log(n);














