let nombre = "Pedro";
let edad = 31;
let trabajando = true;
const saludar = function(par_1, par_2, par_3) {
    let aux = "Esto es una variable auxiliar en local"
    console.log("Hola " + par_1 + " de " + par_2 + " ¿Estas trabajando? " + par_3);
    console.log(typeof par_1, par_1);
    console.log(typeof par_2, par_2);
    console.log(typeof par_3, par_3);
    console.log(typeof aux, aux);
}

saludar(nombre, edad, trabajando);