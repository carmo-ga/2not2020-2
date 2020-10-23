// Aula 22/10/2020
module.exports = class Stack {

    // #data // Atributo privado (não pode ser acesso externamente)
    constructor() {
        this.data = {}   // Armazenamento em objeto
        this.count = 0
    }

    // Inserir na pilha
    push(value) {
        this.count++
        this.data[this.count] = value
    }

    // Remover da pilha
    pop() {
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    // Verifica o valor do topo [última posição] da pilha ("olhadinha")
    peek() {
        return this.data[this.count]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.count
    }
}