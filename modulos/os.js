const { Console } = require('console');
const os = require('os');

console.log('Bytes de mi sistema operativo: ' + os.arch());
console.log('Sistema Operativo: ' + os.platform());
console.log('Cantidad de nucleos del procesador: ' + os.cpus().length);
console.log(os.cpus());/* model: 'AMD Ryzen 5 2600 Six-Core Processor ', speed: 3394, times: { user: 301718, nice: 0, sys: 361515, idle: 9053625, irq: 77562 } */
console.log(os.constants);//todos los errores del sistema

const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log('Cantidad de bytes de mi ram: ' + os.totalmem());
console.log('Cantidad de bytes libres: ' + os.freemem());

console.log('Cantidad de kilobytes de mi ram: ' + kb(os.totalmem()));
console.log('Cantidad de kilobytes libres: ' + kb(os.freemem()));

console.log('Cantidad de megabytes de mi ram: ' + mb(os.totalmem()));
console.log('Cantidad de megabytes libres: ' + mb(os.freemem()));

console.log('Cantidad de gigabytes de mi ram: ' + gb(os.totalmem()));
console.log('Cantidad de gigabytes libres: ' + gb(os.freemem()));


console.log('Directorio de archivos de mi computadora: ' + os.homedir());
console.log('Directorio de archivos temporales de mi computadora: ' + os.tmpdir());

console.log('El nombre del hosting: ' + os.hostname());
console.log(os.networkInterfaces());//te muestra las interfaces de red
