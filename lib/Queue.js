// Aula 05/11/2020
/*
    Estrutura de dados Fila
    Funcionamento: FIFO (First In, First Out)
    (O primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue {
    constructor() {
        this.data = []   // Armazenamento
    }

    // Inserir na fila
    enqueue(value) {
        this.data.push(value)
    }

    // Remover da fila
    dequeue() {
        return this.data.shift()
    }

    // Verifica - mas não retira - o valor do início da fila ("olhadinha")
    peek() {
        return this.data[0]
    }

    // Tamanho da fila
    size() {
        return this.data.length
    }
}