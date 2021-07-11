class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad
    }

    get idPersona(){
        return this.idPersona;
    }

    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        return this.edad = edad;
    }

    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' + this._apellido + ' ' + this.edad;
    }
}

class Empleado extends Persona{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;         
    }

    getidEmpleado(){
        return this._idEmpleado;
    }

    getsueldo(){
        return this._sueldo;
    }

    setsueldo(sueldo){
        return this._sueldo = sueldo;
    }

    toString(){
        return super.toString + ' ' + this._idEmpleado + ' ' + this._sueldo;
    }
}

class Cliente extends Persona{
    static contadorClientes = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._idCliente = ++ Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;

    }

    getidCliente(){
        return this. _idCliente;
    }

    getfechaRegistro(){
        return this._fechaRegistro;
    }

    setfechaRegistro(){
        return this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
    }
}

//Instanciando objetos
//Objeto Persona
let persona1 = new Persona("Gustavo", "Perez", 25);
console.log(persona1);

let persona2 = new Persona("Rosario", "Lopez", 52);
console.log(persona2);

//Objeto Empleado
let empleado1 = new Empleado("Omar", "Perez", 25, 3500);
console.log(empleado1);

let empleado2 = new Empleado("Carlos", "Orantes", 28, 4000);
console.log(empleado2);

//Objeto Cliente
let cliente1 = new Cliente("Jossie", "Tije", 27, new Date());
console.log(cliente1);

let cliente2 = new Cliente("Luis", "Rivera", 25, new Date());
console.log(cliente2);
