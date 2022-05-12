//Para ver como se ejecuta escribir 'node conceptos/monohilo.js' en la terminal
console.log('hola mundo');

let i = 0;
setInterval(function(){
  console.log(i);
  i++;
}, 1000)

console.log('Segunda Instruccion');

//lo que sucede es que se va a ejecutar primero los console.log 'hola mundo' y 
//'Segunda instruccion' porque la funcion dentro cel set interval no se detiene
// y esta al demorar mas, se va a ejecutar a lo ultimo

