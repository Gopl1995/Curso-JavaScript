//Creando Clase
class Persona{

    //atributos estaticos ---de la clase
    static contadorPersona = 0;

    //constantes static 
    static get MAX_OBJ(){
        return 5;
    }

    //atributos no estaticos --de los objetos
    email = "Valor default email"

    constructor (nombre, apellido){
        //Inicializar atributos
        this._nombre = nombre;
        this._apellido = apellido
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
            console.log("Se incrementa el contador "+ Persona.contadorPersona);//no se pone como parametro ya que esta relacionada con la Clase
        } else{
            console.log("No se pueden agregar mas objetos");
        }
        
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

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    //Metodo static
    static saludar(){
        console.log("Saludos desde el metodo estatico");
    }
    //Metodo static con un Objeto como argumento para imprimir las propiedades del objeto
    static saludar2(Persona){
        console.log(Persona.nombre + " " + Persona.apellido);
    }
}

//Herencia---clase hija
class Empleado extends Persona{
    constructor (nombre, apellido, departamento){ //se agregan los atributos de la clase padre
        super(nombre, apellido); //Se llama al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento = departamento;
    }
    //Sobreescritura del metodo
    nombreComyDep(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

} 

//Creando objetos
let persona1 = new Persona("Gustavo", "Perez");
console.log(persona1);

let persona2 = new Persona ("Rosario", "Lopez");
console.log(persona2);

//Metodo get---Ver linea 9, metodo get
console.log(persona1.nombre);

//Metodo set---Ver linea 13, metodo set
persona1.nombre = "Omar"; //set-Modifica o establece nuevo nombre al objeto
console.log(persona1);
console.log(persona1.nombre); //get-Obtiene el nuevo nombre del objeto

//Creando objetos de la clase hija
let empleado1 = new Empleado("Carlos", "Orantes", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

//Definir metodo en la clase padre heredandolo en la clase hija
//Ver linea 25 nuevo metodo 
console.log(empleado1.nombreCompleto());

//Sobreescritura--desde la clase hija, se modifica el comportamiento en el metodo de la clase padre
//Ver linea 45 nuevo metodo
console.log(empleado1.nombreComyDep());

//Metodo toString
console.log(empleado1.toString());

//No es posible llamar un metodo estatico desde un objeto
//persona1.saludar();

//Es posible llamar el metodo estatico desde la clase
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//Atributo estatatico
console.log(Persona.contadorPersona);
console.log(Empleado.contadorPersona);

//Atributos estaticos vs no estaticos
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);

//constante static, no cambia el valor inicial
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 4;
console.log(Persona.MAX_OBJ);

