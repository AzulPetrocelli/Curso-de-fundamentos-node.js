function hola(nombre, callback) {
    setTimeout(function(){
        console.log('Hola '+ nombre);
        callback(nombre);
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('adios '+ nombre);
        setTimeout(otroCallback, 1000);
    },1000);
};

//Callback Hell: refactorizar o sufrir-------------------------------------------------------------------------------


//Es mas practico hacer esto:
function hablar(callbackHablar){
    setTimeout(function(){
            console.log('Bla bla bla bla...');
            callbackHablar();
    }, 1000);
}

function conversacion (nombre, veces, callback) {
    if (veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback); //llama de nuevo a la funcion solo que cada vez VECES va a valer menos
        });
    } else {
        adios(nombre, callback);
    }
};


console.log('Iniciando proceso...');

hola('Azul', function (nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso terminando...');
    });
});

//que hacer esto:
// hola('Azul', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });







