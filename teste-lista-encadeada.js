// Aula 12/11/2020
const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
console.log(lista.toString(), lista.size())

lista.push('Amarelo')
console.log(lista.toString(), lista.size())

lista.push('Branco')
console.log(lista.toString(), lista.size())

lista.push('Rosa')
console.log(lista.toString(), lista.size())

lista.push('Azul')
console.log(lista.toString(), lista.size())