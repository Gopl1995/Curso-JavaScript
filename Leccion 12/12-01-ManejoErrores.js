'use strict';
try{
    let x = 10;
    throw "Mi error";
} catch(error){
    console.log(error);
} finally{
    console.log("Termina revision de errores");
}
console.log("continuamos...");


let resultado = 5;

try{
    if(isNaN(resultado)) throw "No es un numero";
}catch (error){
    console.log(error);
}