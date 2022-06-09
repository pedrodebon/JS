// Ejercicio 1

let cadena = "Una jugadora de billar se ha proclamado ganadora de la pista";
function reemplazo(cad){
    cad = cad.toLowerCase();
    console.log(cad.replace(/a/g, 'o'));
}

reemplazo(cadena);


// Ejercicio 2

let p_1 = "academia";
let p_2 = "escuela";
function filtro_aca(aux) {
    if(aux.startsWith("aca")){
        console.log("La palabra " + aux + " empieza por 'aca'.");
    }else{
    console.log(
        "La palabra " + aux + " no empieza por 'aca'.");
    }
}

filtro_aca(p_1);
filtro_aca(p_2);


// Ejercicio 3

let mensaje = "Hola, que tal?";
let it = 5;
function saludar(aux_1, aux_2){
    for(let i = 0; i < aux_2; i++){
        console.log(i+1 + ") " + aux_1);
    }
}

saludar(mensaje, it);