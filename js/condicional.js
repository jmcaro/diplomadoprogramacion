
let valor = 1500;
let montoMinimo = 150000;
let valorEnvio =16000;

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
