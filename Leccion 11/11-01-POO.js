class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    //Sobreescritura de metodo...
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

//Funcion para ver el polimorfismo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

let gerente1 = new Gerente("Gustavo", 5000, "Informatica");
console.log(gerente1);
console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado("Juan", 8000);
console.log(empleado1.obtenerDetalles());

//Polimorfismo
imprimir(empleado1);
imprimir(gerente1);