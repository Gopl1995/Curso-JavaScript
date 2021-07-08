//Constructores para crear varios objetos de tipo persona
//En este caso de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre,
    this.apellido = apellido,
    this.email = email
    this.nombreComple = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona = {
    nombre : "Gustavo",
    apellido : "Perez",
    email : "gperez@mail.com",
    edad : 25,
    idioma : "esp",
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    },
    get nombreYedad (){
        return this.nombre + ' ' + this.edad;
    },
    get lang (){
        return this.idioma.toUpperCase(); //pasa de minusculas a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}
//Accediendo a las propiedades del objeto persona por separado
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
//Accediendo a todas las propiedades
console.log(persona);

//Agregar metodos al objeto
console.log(persona.nombreCompleto());

//Creacion de objetos---OTRA FORMA
let persona2 = new Object();
persona2.nombre = "Rosario";
persona2.apellido = "Lopez";
persona2.edad = 15
persona2.direccion = "Ciudad Guatemala";
persona2.telefono = 24735880;
//Accediendo a las propiedades del objeto por separado y todas en general
console.log(persona2.nombre);
console.log(persona2);

//Accediendo a las propiedades del objeto---OTRA FORMA
console.log(persona['nombre']);
console.log(persona["nombre"]);

//for in
for(nombrePropiedad in persona){ //recorre la propiedad en el objeto persona
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Agregando propiedades al objeto
persona.tel = 42020555;
persona.tel = 42020556;
console.log(persona);

//Eliminando propiedades al objeto
delete persona.tel;
console.log(persona);

//Otra forma de imprimir los objetos
//Concatenar cada valor
console.log(persona.nombre +','+ persona.apellido);

//for in
for (valor in persona){
    console.log(persona[valor]);
}

//Utilizando object y values
let personaArray = Object.values(persona);
console.log(personaArray);

//Utilizando una cadena y json
let personaString = JSON.stringify(persona);
console.log(personaString);

//Get -- Obtener (obtener valores del objeto)
//ver linea 9, se antepone get a la funcion
console.log(persona.nombreYedad);

//Set -- Poner (poner valores al objeto)--modificar valores del objeto
//ver linea 13, se crea una nueva funcion minusculas a mayusculas
console.log(persona.lang);
persona.lang = "es";
console.log(persona.lang);

//Constructor--palabra reservada new
let padre = new Persona("Luis", "Perez", "lp@mail.com");
console.log(padre);
padre.nombre = "Gustavo";
console.log(padre);

let madre = new Persona("Maria", "Lopez", "ml@mail.com");
console.log(madre);

//Agregar metodos a un Constructor
//ver linea 7 nueva funcion para nombre completo
console.log(padre.nombreComple());
console.log(madre.nombreComple());

//Otras formas de crear objetos
let miObjeto = new Object();
let miObjeto2 = {};
let miCadena1 = new String("Hola");
let miCadena2 = "Hola";
let miNumero = new Number (2);
let miNumero2 = 2;

//Prototype
Persona.prototype.tel = 42020555;
console.log(padre.tel);
console.log(madre.tel);
padre.tel = 54513674;
console.log(padre.tel);

//Call
let persona3 = {
    nom : "Omar",
    ape : "Perez",
    nombreCo : function(titulo, tel) {
        return this.nom + ' ' + this.ape + ' ' + titulo + ' ' + tel;
    },
    nombreComple : function(titulo, tel) {
        return this.nom + ' ' + this.ape + ' ' + titulo + ' ' + tel;
    }
}

let persona4 = {
    nom : "Carlos",
    ape : "Lara"
}

console.log(persona3.nombreCo());
console.log(persona3.nombreCo.call(persona4));

//Paso de argumentos en Call
console.log(persona3.nombreCo.call(persona4,"Ingeniero", "24735880"));

//Metodo Apply
console.log(persona3.nombreCo("Licenciado", "42020555"));
let arreglo = ["Ingenierio", "24735880"];
console.log(persona3.nombreComple.apply(persona4, arreglo));