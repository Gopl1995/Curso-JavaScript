//Forma antigua
let autos = new Array('BMW','Volvo','Fiat');
console.log(autos);

//Forma actual
const automoviles = ['Chevrolet','Toyota','Mercedez Benz'];
console.log(automoviles);
console.log(automoviles[0]);
console.log(automoviles[1]);
console.log(automoviles[2]);

//recorrer todos los elementos
for(i=0; i<autos.length; i++){
    console.log(autos[i]);
}

//Modificar elementos de un arreglo
autos[1] = "Mazda";
console.log(autos);

//Agregar elementos a un arreglo
autos.push("Kia");
console.log(autos);

//Agregando en nueva forma
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

//Agregando con un vacio
autos[6] = 'Porsche';
console.log(autos);

//Preguntar si es arreglo
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);