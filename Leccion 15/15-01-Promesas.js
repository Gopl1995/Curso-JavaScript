let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion = true){
        resolver("Se resolvio correctamente");
    }else{
        rechazar("Se resolvio con error");
    }
});

miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);

//Utilizando catch
miPromesa
.then( valor => console.log(valor))
.catch( error => console.log(error));

//Funcion set timeout
let promesa = new Promise((resolver) => {
    console.log("Inicio promesa");
    setTimeout(()=> resolver ("Saludos con promesa y timeout"), 2000);
    console.log("Fin promesa");
})

promesa.then( valor => console.log(valor) );

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return  "Saludos con promesa y asinc"
}

miFuncionConPromesa().then( valor => console.log(valor));

//Funcion con Await y Async
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver("Promesa con await");
    });
    console.log(await miPromesa);
}

funcionConPromesaYAwait();

//Promesas, await, async y timeout
async function funcionConPromesaAwaitYTimeout(){
    let miPromesa = new Promise( resolver => {
        setTimeout(() => resolver("Promesa con Await y Timeout"), 3000);
    });
    console.log( await miPromesa );
}
funcionConPromesaAwaitYTimeout();