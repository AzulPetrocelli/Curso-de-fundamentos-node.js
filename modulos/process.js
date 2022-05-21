//const proceso = require('process');

process.on('beforeExit' , () => {
    console.log('El proceso va a terminar');
});

//todo lo que hagas en el evento 'exit' va a ser sincrono lo que significa que procesos como el setTimeout() no se van a ejecutar
//todo lo que hagas en el evento 'exit' tiene q ser sincrono para que se pueda ejecutar

process.on('exit' , () => {
    console.log('Azu, el proceso se ha acabado');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

  setTimeout(() => {
      console.log('Esto si se va a ver');
  }, 0);

process.on('uncaughtException' , (error, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error:');
    setTimeout(() => { console.log('Esto viene desde las excepciones');}, 0);
});

funcionQueNoExiste();

console.log('Esto si el error no se recoje no sale')