
let valor = 1500;
let montoMinimo = 150000;
let valorEnvio =16000;

//

/*
let edad = prompt('Bienvenido a la tienda en linea, por favor indiquenos su edad')

if (edad>=18) {    
    let pedido = prompt('Cuantas unidades desea llevar? Recuerde que el monto minimo de compra para que el envio sea gratuito es de $'+montoMinimo);    
    let valorTotal = pedido * valor;
    if (valorTotal>=montoMinimo) {
        alert('El total de su compra es de $'+valorTotal+' y el envio es gratuito ;)')
    } else{
        alert('El total de su compra es de $'+valorTotal+' y el envio tiene un costo de $'+valorEnvio)
    }
} else {
    alert('Lo sentimos, no podemos venderte estos productos, consigue un adulto')
}
*/

// if else if

function ifelseif() {
    let edad = prompt("Ingrese su edad")
    if (edad >= 0 && edad <=1 ) {
        alert("Eres un bebito")
    } else if (edad >= 2 && edad <= 12) {
        alert("Usted es un children")
    } else if(edad >=13 && edad <=17) {
        alert('Usted se encuentra en la adolescencia')
    } else if(edad >=18 && edad <=30) {
        alert('Usted es un joven')
    } else if(edad >= 31 && edad <=64) {
        alert('Usted es un adulto responsable')
    } else if(edad >= 65 && edad <=120) {
        alert('Usted es un anciano')
    } else if(edad <=0 || edad >= 120) {
        alert('Usted es un Dios')
    }
    
}


// Sentencia Switch Case


function puerta() {
    let door = prompt("Elija la puerta: a, b o c,")
    switch (door) {
        case "a":
           alert("Puerta A: Vacia") 
            break;
        case "b":
            alert("Puerta B: Vacia") 
            break;
        case "c":
            alert("Puerta C: Premio Mayor") 
            break;    
        default:
            alert("No existe la puerta "+door)
    }
}



