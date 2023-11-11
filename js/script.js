// funcion que cambia el texto del boton :)

// variable numerica
let number = 30;
// variable cadena de texto
let string = "Hola mundo"
//variable booleana
let estaVivo = false;
//Arreglos
let miArreglo = [10,20,30,40];
let miFamilia = ["Ramon", "Mom", "Dad", "Bro"];

//Objetos
let dog = {
    name : "Ramon Dskaro",
    raza : "Maltipoo",
    color : "Crema",
    edad : 5,
    isVirgen : false,
}

let respuesta = "Mi perro se llama "+dog.name+ ", es de raza "+dog.raza+" y tiene "+dog.edad+" years old, es de color " +dog.color+ " y es "+dog.isVirgen+" que ha estado con amores perrunos"

function log() {
    let data = respuesta;
    console.log('el tipo de datos es '+ typeof(data)+ ' y su valor es: ' + data)    
}

//log();



function ivaPorPagar() {
    let venta = prompt("Cual es el total de sus ventas gravadas a la tarifa general");
    let compra = prompt("Cual es el total de sus compras gravadas a la tarifa general")
    const IVA = 0.19;
    resultado = (venta * IVA)-(compra * IVA);
    alert("El IVA a pagar en este bimestre es de "+ resultado +" Pesos");
}


//Homework: a partir de la construccion de la calculadora de iva, el cliente desea que el usuario final pueda colocar el IVA que el desee








const boton = document.querySelector(".text");

    //boton.addEventListener("click", cambiarBoton);

    function cambiarBoton() {
        let name = prompt("Escriba el nuevo nombre de su boton");
        boton.textContent = name;
    }



// otra funcion cualquiera



