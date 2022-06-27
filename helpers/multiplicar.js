// Importacion de "fs"
const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {
    return promesa = new Promise( ( resolve, reject ) => {
        let salida = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base*i }\n`;
        }

        if( listar ) {
            console.log( '==============================='.green );
            console.log( 'Tabla del: '.green, colors.red(base) );
            console.log( '==============================='.green );

            console.log( salida );
        }
    
        // Guardamos la informacion en un archivo .txt
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida ); 

        if( `tabla-${ base }.txt` ) {
            resolve( `tabla-${ base }.txt` );
        } else {
            reject( 'No se pudo crear el archivo!!' );
        }
    });
}

// Se exporta la funcion "crearArchivo"
module.exports = {
    crearArchivo
}
