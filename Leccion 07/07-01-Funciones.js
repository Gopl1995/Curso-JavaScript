//Hoisting
miFuncion(4,6);

//Declaracion de la funcion
function miFuncion(a, b){
    console.log(arguments.length);
    console.log("La suma es: " + (a+b));
}
//Mandando a llamar la funcion
miFuncion(1,2);

//Usando return
function funcion2(x,y){
    return x + y;
}
let resultado = funcion2(2,5);
console.log("La suma es: " + resultado);

//Funciones de tipo expresion
let sumar = function(c,d){return c+d};
resultado = sumar(5,5);
console.log(resultado);

//Funciones de tipo self-invoking--NO SE PUEDE REUTILIZAR
(function (a,b){
    console.log("Ejecutando la funcion " + (a+b));
})(2,4);

//Funciones como Objeto--CONVITIENDO miFuncion a String
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funciones Flecha
const sumarFuncionTipoFlecha = (a,b) => a+b;
resultado = sumarFuncionTipoFlecha(8,2);
console.log(resultado);

//Argumentos y parametros
function funcionResta (e, f){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return e-f;
}
let resta = funcionResta(5,2);
console.log("La resta es: "+ resta);

//Paso por valor
let y = 10;

function cambiarValor(r){
    r = 20;
}

cambiarValor(y);
console.log(y);

//Paso por referencia
const persona = {
    nombre : "Gustavo",
    apellido : "Perez"
}

function cambiaValorObjeto(p1){
    p1.nombre = "Rosario";
    p1.apellido = "Lopez";
}

cambiaValorObjeto(persona);
console.log(persona);

