  const { exec, spawn } = require('child_process');

  //exec()
  exec('dir', (error, stdout, sterr) => {
      if (error) {
          console.error(error);
          return false;
      }

      console.log(stdout);
  });
 
  //spawn()
  let proceso = spawn('cmd.exe', ['/c','dir']);

  console.log(proceso.pid);
  console.log(proceso.connected);

  proceso.stdout.on('data', function (dato) {
      console.log('¿Esta muerto?');
      console.log(proceso.killed);
      console.log(dato.toString());
  });

  proceso.on('exit', function() {
      console.log('el proceso terminó');
  });