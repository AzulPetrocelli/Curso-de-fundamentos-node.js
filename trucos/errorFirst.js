const { error } = require("console");
const { Z_ASCII } = require("zlib")

function asincrona(callback) {
    setTimeout(() =>{
        try{
            let a = 3 + z;
            callback(null, a);
        } catch (e){
            callback(e, null);
        }
    }, 1000);
};

asincrona((err, dato)=>{
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        //throw err; //NO VA A FUNCIONAR EN FUNCIONES ASINCRONAS
    }
    console.log('Todo ha ido bien, mi data es ', dato);
});