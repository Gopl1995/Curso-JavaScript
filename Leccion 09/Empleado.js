class Empleado extends Persona{

    static contadorEmpleados;

    constructor(sueldo){

        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
        //super(nombre, apellido, edad);
        
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