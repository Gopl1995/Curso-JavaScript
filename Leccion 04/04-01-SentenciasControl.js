let numero = 3;
// EJEMPLO DE IF-ELSE IF
if (numero == 1){
    console.log("Numero uno");
}else if (numero ==2){
    console.log("Numero dos");
}else {
    console.log("Numero tres");
}

//EJEMPLO DE SWITCH
let n = 3
let mensaje = "Valor desconocido";
switch(n){
    case 1: 
        mensaje = "Numero uno";
    break;
    case 2:
        mensaje = "Numero dos";
    break;
    case 3:
        mensaje = "El numero es tres";
    break;
}
console.log(mensaje);