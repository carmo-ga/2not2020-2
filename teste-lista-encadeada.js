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

// Remoção na última posição
let removido = lista.pop()
console.log(lista.toString(), lista.size(), { removido })

// Remoção do primeiro elemento
removido = lista.removeAt(0)
console.log(lista.toString(), lista.size(), { removido })