let sumar = 0;
let sumar2 = 0;

//Para saber cuanto tarda un proceso usamos console.time('elNombreDelProceso')
//donde empieza el proceso y console.timeEnd('elNombreDelProceso') donde termina
//y nos imprimira la cantidad de milisegundos que tarda en ejecutarse una funcion

  console.time('Todo');

  console.time('elNombreDelProceso');
  for(let i = 0; i < 100000000; i++){
      sumar+= 1;
  }
  console.timeEnd('elNombreDelProceso');//elNombreDelProceso: 65.558ms

  console.time('elNombreDelProceso2');
  for(let j = 0; j < 1000000000; j++){
      sumar2+= 1;
  }
  console.timeEnd('elNombreDelProceso2');//elNombreDelProceso2: 630.814ms

  console.log('Empieza el proceso asincrono');
  console.time('asincrono');
      asincrona()
        .then(() => {
            console.timeEnd('asincrono');
        });

  console.timeEnd('Todo');//Todo: 700.367ms

  function asincrona(){
      return new Promise ( (resolve) => {
          setTimeout(() => {
              console.log('Termina el proceso asincrono');
              resolve();
          });
      });
  };