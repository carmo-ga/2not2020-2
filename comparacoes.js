//Comparando dois números distintos (Propriedade comutativa)
let a = 10, b = 7
console.log(a > b)
console.log(b > a)

console.log('------------------')

//Comparando duas strings distintas   (Comparação binária)
let x = 'abacaxi', y = 'jabuticaba'
console.log(x > y)
console.log(y > x)

console.log('------Dois objetos------------')
// Comparando dois objetos (grandezas diferentes, não se comparam)
let carro1 = { modelo: 'Fusca', marca: 'Volkswagen', ano: 1969 }
let carro2 = { modelo: 'Palio', marca: 'Fiat', ano: 2011 }
console.log(carro1 > carro2)
console.log(carro2 > carro1)
console.log(carro1 == carro2)

//Comparando booleanos (true sempre é maior)
console.log(true > false)
console.log(false > true)

//Tipos de dados (naturalmente) comparáveis em JS são APENAS: 
// - Number
// - String
// - Boolean


