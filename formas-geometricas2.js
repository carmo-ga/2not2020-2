// Aula de 09/10/2020
class FormaGeometrica {
    // O construtor é chamado APENAS uma vez.
    constructor(base = 1, altura = 1, tipo = 'R') {
        if(isNaN(base) || base <= 0) {
            //console.log(`Valor de base: ${base} inválido.`)
            throw new Error('A base deve ser numérica e maior que zero.')
        }

        if(isNaN(altura) || altura <= 0) {
            throw new Error('A altura deve ser numérica e maior que zero.')
        }

        //if(tipo != 'R' && tipo != 'T' && tipo != 'E') {
        if(['R', 'T', 'E'].indexOf(tipo) < 0) {
            throw new Error('O tipo deve ser R, T ou E.')
        }

        this.base = base
        this.altura = altura
        this.tipo = tipo
    }

    // Método
    area() {  // Isto é uma função, mas como está dentro da classe não há necessidade de colocar a palavra 'function'
        switch(this.tipo) {
            case 'R':
                return this.base * this.altura
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura / 2) * Math.PI
            default:  // Tipo inválido
                return null
        }
    }
}

const retangulo = new FormaGeometrica(2, 6.5, 'R')
const triangulo = new FormaGeometrica(4.2, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const what = new FormaGeometrica(8, 3, 'T')

console.log(retangulo)
console.log(triangulo)
console.log(elipse)
console.log(what)

console.log(retangulo.area())

retangulo.altura = 6
retangulo.base = 2.75
console.log(retangulo.area())
console.log('Área do what: ', what.area())
console.log('Base do what: ', what.base)

what.base = 'trem'
console.log('Área do what: ', what.area())
