// Aula 22/10/2020
module.exports = class Stack {

    // #data // Atributo privado (não pode ser acesso externamente)
    constructor() {
        this.data = []   // Armazenamento
    }

    // Inserir na pilha
    push(value) {
        this.data.push(value)
    }

    // Remover da pilha
    pop() {
        return this.data.pop()
    }

    // Verifica - mas não retira - o valor do topo [última posição] da pilha ("olhadinha")
    peek() {
        return this.data[this.data.length - 1]
    }

    // Retorna o número de elementos da pilha
    size() {
        return this.data.length
    }
}