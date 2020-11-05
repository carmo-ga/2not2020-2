// Aula 05-11-2020
//const Queue = require('./lib/Queue')
const Queue = require('./lib/Queue2')

let fila = new Queue()

fila.enqueue('Jurisvander')
fila.enqueue('Marineuza')
fila.enqueue('Valcinete')
fila.enqueue('Periclenes')
fila.enqueue('Astrogildo')

console.log(fila)

let proximo = fila.dequeue()
console.log({proximo})
console.log(fila)

fila.enqueue('Katinéia')
let primeiro = fila.peek()
console.log({primeiro})
console.table(fila)