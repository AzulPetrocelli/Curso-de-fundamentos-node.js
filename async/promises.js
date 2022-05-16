function hola(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log('Hola', nombre);
            resolve(nombre);
        },1000);
    });
};

function hablar(nombre){
    return new Promise((resolve,reject) => {
        setTimeout(function(){
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000);
    });
};

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('adios', nombre);
            resolve();
        },1000);
    });
};

//Ejecucion----------------------------------------------------------------------------------------------------------
console.log('Iniciando el proceso...')

hola('Azul')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        setTimeout(function(){
            console.log('Terminando el proceso...')
        }, 1000);
    })
    .catch(error => {
      console.error(error);
    })