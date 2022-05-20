//Con console podemos imprimir todo tipo de valores por nuestra terminal:

//console.log: recibe cualquier tipo y lo muestra en el consola.
console.log('Algo');

//console.info: es equivalente a log pero es usado para informar.
console.info('Algo');

//console.error: es equivalente a log pero es usado para errores.
console.error('Algo');

//console.warn: es equivalente a log pero es usado para warning
console.warn('Algo');

//console.table: muestra una tabla a partir de un objeto.
var tabla = [
    {
        a: 1,
        b: 'Z',
    },

    {
        a: 2,
        b: 'Otra'
    },
]

console.log(tabla);
console.table(tabla);

//console.count: inicia un contador autoincremental.
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');



//console.countReset: reinicia el contador a 0.
console.countReset('Algo');

//console.time: inicia un cronometro en ms.
console.time("answer time");

//console.timeLog: muestra el ms en el que se encuentra el cronometro.
console.timeLog("answer time");

//console.timeEnd: Finaliza el cronometro.
console.timeEnd("answer time");

//console.group: permite agrupar errores mediante identación.
console.group('converzacion');
console.log('Hola');
console.log('Bla Bla Bla Bla');
console.log('Adios');

//console.groupEnd: finaliza la agrupación.
console.groupEnd('converzacion');

//console.clear: Limpia la consola.
console.clear('Algo');