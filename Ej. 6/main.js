//Ejercicio 1
let sum_1 = 17;
let sum_2 = 25;
let sum_3 = 33;
function sumatorio(sum_1, sum_2, sum_3){
    let sumatorio = sum_1 + sum_2 + sum_3;
    return sumatorio;
}

console.log(sumatorio(sum_1, sum_2, sum_3));

//Ejercicio 2

let nombre = "Pedro";
let apellido1 = "Debón";
let apellido2 = "Fernández";
function concatenador(aux_1, aux_2, aux_3){
    let nombreCompleto = aux_2.concat(' ', aux_3.concat(', ', aux_1));
    return nombreCompleto;
}

console.log(concatenador(nombre, apellido1, apellido2));

//Ejercicio 3

let num_1 = 30;
let num_2 = 30;
function comparador(aux_1, aux_2){
    let numeroMayor = aux_2;
    if(aux_1 > aux_2){
        numeroMayor = aux_1;
    }else if(aux_1 ==  aux_2){
        console.log("Son iguales.");
    }
    return numeroMayor;
}

console.log(comparador(num_1, num_2));