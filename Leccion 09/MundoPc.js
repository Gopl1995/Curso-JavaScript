class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton : [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let raton1 = new Raton ("USB", "HP");
console.log(raton1.toString());
let raton2 = new Raton ("Bluetooth", "Dell");
raton2.marca = "HP";
console.log(raton2.toString());

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado : [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

let teclado1 = new Teclado ("USB", "DELL");
console.log(teclado1.toString());
let teclado2 = new Teclado ("Bluetooth", "DELL");
console.log(teclado2.toString());

class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }

    get tamano(){
        return this._tamano;
    }

    set tamano(tamano){
        return this._tamano = tamano;
    }

    toString(){
        return `Monitor : [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamano: ${this._tamano}]`;
    }
}

let monitor1 = new Monitor("HP", "25 pul");
console.log(monitor1.toString());
let monitor2 = new Monitor("Compaq", "30 pul");
console.log(monitor2.toString());

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `idComputadora: ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}

let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
console.log(computadora1.toString());
let computadora2 = new Computadora("DELL", monitor2, raton2, teclado2);
console.log(computadora2.toString());

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadoras(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = " "; //computadoras que se encuentran en esta orden
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadoras(computadora2);
orden2.agregarComputadoras(computadora1);
orden2.mostrarOrden();