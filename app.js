   const argv = require('./config/yargs').argv;
   const colors = require('colors');

                  
   const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');   

   let comando = argv._[0];

   switch(comando) {
   case 'listar':
   listarTabla(argv.base, argv.limite);
   break;

   case 'crear':
   crearArchivo(argv.base, argv.limite)
   .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
   .catch(e => console.log(e))
   break;
   default:
   console.log('Comando no reconocido');
   }


      /* let argv2 = process.argv;
                     */
      /* console.log(argv.base); */
      /* console.log('Limite', argv.limite);
      */
      /* const {crearArchivo} = require('./multiplicar/multiplicar')
      let comando = argv._[0];

    switch(comando){
       case 'listar':
       console.log('listar');
       break;

       case 'crear':
       console.log('crear');
       break;

       default:

       console.log('Comando no reconocido');
    }
 */
