//Objeto global
console.log(global);

//como parar un setInterval con clearInterval
  let i = 0;
  let intervalo = setInterval(function(){
      console.log('Hola');
      i++
      if(i === 3){
          clearInterval(intervalo)
      }
  }, 1000);

//
  setImmediate(function(){
      console.log('Hola');
  })

//nos va a mostrar el proceso de nuestro proyecto
console.log(process);

//Nos va a decir la ubicacion de la carpeta en la que nos encontramos
console.log(__dirname); 

//Nos va a decir la ubicacion del archivo en la que nos encontramos
console.log(__filename);

//como crear variables globales
global.miVariable = 'El valor que yo quiera';
console.log(miVariable);
