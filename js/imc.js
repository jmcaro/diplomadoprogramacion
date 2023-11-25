function calcularIMC() {
    let paciente = window.prompt("Bienvenido al sistema Online para calcular su indice de masa corporal. Para comenzar por favor indiquenos su Nombre");
    
    let peso = window.prompt("Ahora indiquenos su peso en kilogramos");
    
    let altura = window.prompt("Ya para terminar diganos cuento es su altura en centimetros")
    
    alert("Estamos procesando la informacion, presione aceptar para continuar");
    
    const imc = peso / ((altura/100)**2);   

    alert(paciente.toUpperCase() + " tu resultado esta listo !!!, de acuerdo con tu peso ("+peso +"kg) y tu altura ("+altura +"cm), tu Indice de Masa Corporal es de "+ parseFloat(imc).toFixed(2)+" y tu diagnostico clinico es "+ escalaIMC(imc));
}

function escalaIMC(data) {
    let escala;
    if (data <25) {
        escala = "Normal"
    } else if (data < 30) {
        escala = 'Sobrepeso'
    } else if (data >= 30) {
        escala = "Obesidad"
    }
    return escala
}