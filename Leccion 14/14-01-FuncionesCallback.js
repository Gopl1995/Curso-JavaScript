function miFuncion1(){
    console.log("Mi funcion 1");
}

function miFuncion2(){
    console.log("Mi funcion 2");
}

miFuncion1();
miFuncion2();

//Funciones Callback
function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let sum = op1 + op2;
    funcionCallback(`Resultado: ${sum}`);
}

sumar(5, 3, imprimir);

//Llamadas asincronas con setTimeout
function miFuncionCallback(){
    console.log("Saludo asincrono despues de 3 segundos");
}
setTimeout(miFuncionCallback, 3000);
setTimeout(function(){console.log("Saludo asincrono dos")}, 4000);
setTimeout(() => console.log("Saludo asincrono tres"), 5000);

//Funciones setInterval
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000);