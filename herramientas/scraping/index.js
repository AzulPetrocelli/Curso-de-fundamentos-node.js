const puppeteer = require('puppeteer');

//Esto es una funcion auto ejecutable
(async () => {
    //nuestro codigo 
    console.log('Lanzamos navegador!');

    // Lanza un navegador
    // const browser =await puppetter.launch()

    // para ver el navegador le agregamos { headless: false }
    const browser = await puppeteer.launch({ headless: false });

    // abrimos una nueva pagina en nuestro navegador
    const page = await browser.newPage();

    // le damos el link de la pagina donde queremos ir
    await page.goto('https://es.wikipedia.org/wiki/Node.js');


    //Extraemos el h1 de la pagina y lo guardamos en una variable
    //page.evaluate() va a generar un script de lo que queramois dentro de la pagina
    var titulo1 = await page.evaluate( () => {
       const h1 = document.querySelector('h1');
       // sin el innerHTML imprimiria la linea del h1 completa en la consola de la pagina
       console.log(h1.innerHTML);
       return h1.innerHTML;
    });

    console.log(titulo1);

    console.log('Cerramos navegador...');
    // cerramos el navegador
    browser.close();
    console.log('Navegador cerrado');
})();