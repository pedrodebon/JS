const array_comida = ["🍔", "🌮", "🍣", "🍕", "🥡", "🍱", "🍙", "🍘", "🥑"];
array_comida.fill("🍺", array_comida.findIndex(element => element == "🍕")+1);
console.log(array_comida);