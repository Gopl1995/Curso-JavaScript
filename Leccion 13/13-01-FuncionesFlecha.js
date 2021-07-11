//No aplica hoisting, por lo tanto primero se declara la funcion y luego se manda a llamar

let miFuncion = function(){
    console.log("Saludos desde mi funcion");
}

let miFuncionFlecha = () => {
    console.log("Saludos desde mi funcion flecha");
}

miFuncion();
miFuncionFlecha();

const saludar = () => { return "Saludos desde funcion flecha"};
console.log(saludar());

const funcionConParametrosClasico = function (mensaje) {
    console.log(mensaje);
}

const funcionConParametros = (mensaje) =>  console.log(mensaje);
funcionConParametros("hola");

const funcionConVariosParametros = (a, b) => a + b;
console.log(funcionConVariosParametros(3,9));