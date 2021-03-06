let vetor1 = []         //Forma "moderna"
let vetor2 = Array()    //Forma "tradicional"

//Criação de vetores com valores iniciais
let vetor3 = [2, 4, 6, 8, 10]
let vetor4 = Array('Vaca', 'Cachorro', 'Gato', 'Papagaio')

//Inserção de novos valores em um vetor

//Forma 1: push()  --> Adiciona novos elementos AO FINAL do vetor
vetor1.push('Laranja')
vetor1.push('Limão')

console.log(vetor1)

//Forma 2: unshift()  --> Adiciona novos elementos NO INÍCIO do vetor
vetor1.unshift('Maçã')
console.log(vetor1)

vetor1.unshift('Abacaxi')
console.log(vetor1)

//Forma 3: splice()
// 1º parâmetro: a posição de inserção
// 2º parêmetro: quantos elementos serão eliminados (para inserção == 0)
vetor1.splice(2, 0, 'Morango')
console.log(vetor1)

vetor1.splice(1, 0, 'Jaca')
console.log(vetor1)

//Remoção de elementos do vetor

//Forma 1: pop() --> retira o ÚLTIMO elemento do vetor
let x1 = vetor1.pop()
console.log(vetor1, x1)

//Forma 2: shift() --> retira o PRIMEIRO elemento do vetor
let x2 = vetor1.shift()
console.log(vetor1, x2)

//Forma 3: splice()
//1º parâmetro: a posição para remoção
//2º parâmetro: a quantidade de elementos a serem removidos
//O retorno de splice() na remoção será um vetor contendo o(s) item(ns) removido(s)
let x3 = vetor1.splice(2, 1)
console.log(vetor1, x3)

// O splice() também ser para fazer substituições
vetor1.splice(1, 1, 'Pêra')
console.log(vetor1)

//Colocando mais alguns elementos no vetor
vetor1.push('Amora', 'Jaboticaba')
vetor1.push('Pêssego')
vetor1.push('Uva')
vetor1.push('Abacate')
console.log(vetor1)

//Métodos de percurso de vetores

//Forma 1: usando o for tradicional
//O início da variável é sempre na posição 0 e seu incremento deve ir até uma posição ANTES do seu número de elementos (length)
for(let i = 0; i < vetor1.length; i++) {
    console.log(vetor1[i])
}

console.log('--------------------')

// Forma 2: for..of
//Percorrer o vetor do primeiro ao último elemento de uma forma mais simples que o for tradicional
for(let fruta of vetor1) {
    console.log(fruta)
}

console.log('--------------------forEach------')

// Forma 3: forEach()
// O argumento do forEach() é uma função que recebe cada elemento do vetor para fazer algo com ele

//Argumento como arrow function
vetor1.forEach(fruta => console.log(fruta))

//Argumento como função tradicional
vetor1.forEach(function(fruta) {
    console.log(fruta)
})


//------- OBJETOS ----------
