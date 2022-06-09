//Ejercicio 1

let mes = "Abril";
switch (mes) {
    case "Enero": case "Febrero":   case "Marzo": case "Abril": 
    case "Mayo":  case "Junio": case "Julio": case "Agosto":    
    case "Septiembre":    case "Octubre":   case "Noviembre": case "Diciembre":
        console.log("Estamos en el mes de " + mes);
        break;

    default: 
        console.log("No has introducido un mes");
        break;
}

// Ejercicio 2

let numero = "TRES";
switch (numero.toLowerCase()) {
    case "uno":
        console.log(1);
        break;
    case "dos":
        console.log(2);
        break;
    case "tres":
        console.log(3);
        break;
    case "cuatro":
        console.log(4);
        break;
    case "cinco":
        console.log(5);
        break;
    default: 
        console.log("No has introducido un numero valido");
        break;
}