let saludo = "Hola"

saludo += " Paola";

console.log(saludo);

console.log(0==false);

console.log(5<=5);
console.log(10>8 ? "verdadero" : "falso");
//alert(false ? "verdadero" : "falso");

//let decision = window.confirm("eres mayor de edad?")
//alert(decision? 'Bienvenido a esta web': 'Usted es menor de edad retirese del sitio')

// realizar una confirmacion para eliminar datos

let nombre = window.prompt("Hola como te llamas?");
let edad = window.prompt("Que edad tienes");

let msj1="Bienvenido "+ nombre.toUpperCase() + " estamos gustosos de tenerte de vuelta";

let msj2= "Hola "+nombre.toUpperCase()+" lastimosamente no cumnples con la edad necesaria para seguir en esta web"

alert(edad>=18 ? msj1 : msj2)





//vamos a construir una calculadora de IMC

