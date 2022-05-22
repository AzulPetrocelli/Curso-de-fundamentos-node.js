const sharp = require('sharp');

sharp('original.png')
    .resize(80)//le da a la imagen una medida de 80x80
    .grayscale()//cambia la imagen a blanco y negro
    .toFile('resized.png')//crea una nueva imagen con las caracteristicas que le acabamos de dar