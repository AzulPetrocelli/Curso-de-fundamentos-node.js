//Como crear un modulo
  const fs = require('fs');

  //los modulos pueden tener metodos para editar borrar leer o crear archivos como los siguientes:

  //Leer un archivo con el metodo readFile() y pasarlo a texto con el metodotoString()
  function leer(ruta, callback){
      fs.readFile(ruta, (err, data) =>{
          console.log(data.toString());
      });
  }
  
  //Escribir un nuevo archivo con el metodo writeFile
  function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, function(err){
      if(err){
        console.error('No he podido escribirlo', err);
      } else {
        console.log('Se ha escrito correctamente');
      }
    })
  }
  
  //Borrar un archivo con el metodo unlink()
  function borrar(ruta, callback){
    fs.unlink(ruta, callback);
  }
  
  leer(__dirname + '/archivo.txt', console.log);
  escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
  borrar(__dirname + '/archivo1.txt', console.log)