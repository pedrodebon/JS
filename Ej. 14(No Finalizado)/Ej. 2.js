const array_comida = ["🍕", "🍕", "🍍", "🍕", "🍕"];
if(array_comida.some(element => element == "🍍") == true){
    console.log("Hay un elemento 🍍 en la posicion: " + array_comida.findIndex(element => element == "🍍"));
}else{
    console.log("No hay un elemento 🍍 en el array");
};