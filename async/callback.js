function hola(nombre, callback) {
    setTimeout(function(){
        console.log('Hola '+ nombre);
        callback(nombre);
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('adios '+ nombre);
        setTimeout(otroCallback, 1000)
    },1000)
}

//Cuando llamamos a la funcion 'hola' recibe como parametro un nombre y una funcion(el callback)
//dentro de esa funcion esta la funcion 'adios' hecha previamente que tambien recibe recibe como 
//parametro un nombre y una funcion(el otroCallback) que lo que hace es imprimir un mensaje con un 
//console.log

hola('Azul', /*callback =*/ function (nombre) {
    adios(nombre , /*otroCallback =*/ function(){
        console.log('Proceso terminando...');
    });
})


console.log('Iniciando proceso...');


