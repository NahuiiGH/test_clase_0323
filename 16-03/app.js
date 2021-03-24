const fs = require ('fs'); // llamo al modulo nativo de node.js "FS" = File System

console.log ('Aplicacion de tareas');
console.log ('--------------------');

let tareas = fs.readFileSync('./tareas.json', 'utf-8'); // me permite usar la propiedad de leer de fs
tareas = JSON.parse(tareas); // convierto el array de tareas del JSON a un string como objeto literal

console.log(tareas)

let argumento = process.argv[2];

escribirJSON = (array) => 

switch (argumento) {
    case 'listar':
    tareas.forEach(tareas => {
       console.log('La tarea ' + tareas.titulo + ' se encuentra ' + tareas.estado);
    });
        break;

    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;

    default:
        console.log ("No entiendo que queres hacer");
        break;
}
console.log ('--------------------');


//console.log ('Aplicacion de tareas');
//console.log ('--------------------');

//let tareas = fs.readFileSync('./tareas.json', 'utf-8'); // me permite usar la propiedad de leer de fs
//tareas = JSON.parse(tareas); // convierto el array de tareas del JSON a un string como objeto literal

//console.log(tareas);

