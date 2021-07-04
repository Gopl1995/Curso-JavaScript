/*
Ejemplos de tipos de datos
en JavaScript
*/
//Tipo de dato String
var nombre = "Gustavo";
console.log(nombre);

//type of para saber el tipo de variable
nombre = 20;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Omar",
    apellido : "Perez",
    edad : 25 
}
console.log(objeto);

//Tipo de dato boolean
var bandera = true;
console.log(bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi Simbolo");
console.log(simbolo);

//Tipo de dato Clase es una funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo de dato undefined
var x;
console.log(x);

//null ausencia de valor
var y = null;
console.log(y);

//Los arrays son de tipo object
var autos = ["BMW", "AUDI", "VOLVO"];
console.log(autos);

//Concatenar valores
var nombre = "Luis";
var apellido = "Perez";
var nombrecompleto = nombre +' '+apellido;
console.log(nombrecompleto);

//el entero lo toma como string
var id = nombre + 4;
console.log(id);

//al poner entre parentesis los numeros, se sumaran
var x = nombre + (4+1);
console.log(x);

//Es posible declarar una variable sin var, let o cons
nombremama = "Rosario";
console.log(nombremama);

//utilizando let
let nombrehijo;
nombrehijo = "Omar";
console.log(nombrehijo);

//utilizando cons
cons = "Luis Gustavo";
console.log(cons);