//Ejercicio 1

let nombre = "Pedro";
let apellido = "Debón";

const saludar = (par_1, par_2) => {
    let aux = "Esto es una variable auxiliar en local"
    console.log("Hola " + par_2 + ", " + par_1);
}

print(saludar(nombre, apellido));

//Ejercicio 2

let boolean = false;
function true_false(aux_1){
    if(aux_1 == true){
        console.log("El resultado es verdadero.")
    }else{
        console.log("El resultado es falso.")
    }
}

true_false(boolean);

//Ejercicio 3

function parametros_infinitos(...valores){
    valores.forEach(element => {
        console.log(element);
    });
}

parametros_infinitos(1,2,3,4,5);