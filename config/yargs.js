const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .options('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .options('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hasta donde quieres la tabla'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ) {
                        throw 'La base debe ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;