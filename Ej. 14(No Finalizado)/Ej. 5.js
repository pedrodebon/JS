const array_comida = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const array_comida_2 = [];

array_comida.forEach((element, index) => {
    array_comida_2.push(element);
    if(element == "🌶"){
        array_comida_2.push("🥵");
    };

});

console.log(array_comida_2);