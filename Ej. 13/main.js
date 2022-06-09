// Inicializacion de las variables i y numero
let numero = 1;
let i = 0;

// Inicia el bucle DO WHILE. La primera iteraccion empezara dentro del DO
do {

    // ¿0 === 0? Si, por tanto, entramos en el primer IF
    if(i === 0){

        // Sumamos una unidad a la variable i(1), restamos una unidad a la variable numero(0)
        // y mostramos por pantalla la variable numero
        i++;
        numero--;
        console.log(numero);

    // No entramos en el ELSE en la primera iteraccion pero si a partir de la siguiente
    } else{
        numero++;
        console.log(numero);
    }

// Una vez terminada la primera iteraccion del DO, haremos hasta 5 iteracciones con el WHILE entrando en el ELSE anterior
}while (numero < 5);

// Haremos un total de 6 iterraciones en total con los siguientes datos mostrados por pantalla: 0, 1 , 2, 3, 4, 5. 