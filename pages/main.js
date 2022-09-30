
let genero = prompt("Ingresa tu genero (Hombre o Mujer)");

if (genero == "Hombre") {
    let peso = prompt("Ingresa tu peso en kilogramos:");
    let estatura = prompt("Ingresa tu estatura en metros:");

    let calculo = (estatura * estatura)
    let resultado = (peso / calculo)
    if (resultado < 18.5){
        alert("Tu IMC es de: " + resultado + ", y estás bajo de peso");
    }
    if (resultado >= 18.5  && resultado <= 24.9){
        alert("Tu IMC es de: " + resultado + ", y estás en peso normal");
    }
    if (resultado >= 25  && resultado <= 29.9){
        alert("Tu IMC es de: " + resultado + ", y estás en sobrepeso");
    }
    if (resultado >= 30  && resultado <= 34.9){
        alert("Tu IMC es de: " + resultado + ", y estás en grado de obesidad");
    }
    if (resultado >= 35){
        alert("Tu IMC es de: " + resultado + ", y estás en grado de obesidad morbida");
    }

    
}