// Aula 05/11/2020
/*
    Estrutura de dados Fila
    Funcionamento: FIFO (First In, First Out)
    (O primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue {
    constructor() {
        this.data = {}   // Armazenamento
        this.head = 0    // "Cabeça" (início da fila)
        this.tail = -1   // "Cauda" (final da fila)
    }

    // Inserir na fila
    enqueue(value) {
        this.tail++
        this.data[this.tail] = value
    }

    // Remover da fila
    dequeue() {
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Verifica - mas não retira - o valor do início da fila ("olhadinha")
    peek() {
        return this.data[this.head]
    }

    // Tamanho da fila
    size() {
        return this.tail - this.head + 1
    }
}