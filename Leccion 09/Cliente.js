class Cliente{
    static contadorClientes;
    
    constructor(fechaRegistro){
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