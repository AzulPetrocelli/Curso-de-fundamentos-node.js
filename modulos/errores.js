  //esta funcion siempre va a tirar error porque Z no esta definida
  function serompe(){
      return 3 + Z ;
  }


  //por mas que este llamando a una funcion se va a ejecutar de la misma morfa si la llamamos por un try
  function otraFuncion(){
      serompe();
  }

  //Al ser asincrona si uso un try para llamarla de todas formas va a detener el proceso de mi programa en estos casos
  //el try/catch va dentro de la funcion asincrona
  function seropmeAsincrona(){
      setTimeout(function(){
          try{
              return 3 + Z ;
          } catch(error) {
              console.error('La variable Z no esta definida');
              console.error(error.message);//Z is not defined
          }
      });
  };

  //Si llamo la funcion serompe() con try el error se ejecuta con lo que hay en el catch y no interviene con el
  // resto del codigo
  try{
      serompe();
  } catch(error) {
      console.error('La variable Z no esta definida')
      console.error(error.message)//Z is not defined
  }

  console.log('El codigo se sigue ejecutando')


  //Si llamo a una funcion y me da un error detiene el proceso de mi codigo por eso no se imprime el console 
  //luego de el error que genera la funcion serompe()
/*   serompe();

  console.log('El codigo se sigue ejecutando') */