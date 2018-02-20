const os = require('os');
const fs = require('fs');
const mm = require('./prueba.js')

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

/*let cpu_string = JSON.stringify(cpu);

fs.appendFile('informacion.txt', `Información del cpu: ${cpu_string}` , function(error){
    if(error){
        console.log('Error a crear el archivo');
    }
});*/

/*console.log(cpu);
console.log(sistema);
console.log(usuario);*/

mm.saludar;