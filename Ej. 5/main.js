function cara_o_cruz(){
    let resultado = "";
    if(Math.round(Math.random()) == 1){
        resultado = console.log("Ha salido CARA");
    }else{
        resultado = console.log("Ha salido CRUZ");
    }

    return resultado;
}

cara_o_cruz();