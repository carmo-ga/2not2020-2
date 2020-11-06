// Aula 06/11/2020
/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um dos seus lados
*/
module.exports = class Deque {
    constructor() {
        this.data = {}   // Armazenamento
        this.head = 0    // "Cabeça" (início da fila)
        this.tail = -1   // "Cauda" (final da fila)
    }

    // Inserir no ínicio da fila
    insertFront(value) {
        this.head--
        this.data[this.head] = value
    }

    // Inserir no fim da fila
    insertRear(value) {
        this.tail++
        this.data[this.tail] = value
    }

    // Remover do início da fila
    removeFront() {
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    // Remover do fim da fila
    removeRear() {
        let value = this.data[this.tail]
        delete this.data[this.tail]
        this.tail--
        return value
    }

    // Verifica - mas não retira - o valor do início da fila ("olhadinha")
    peekFront() {
        return this.data[this.head]
    }

    // Verifica - mas não retira - o valor do final da fila ("olhadinha")
    peekRear() {
        return this.data[this.tail]
    }

    // Tamanho
    size() {
        return this.tail - this.head + 1
    }
}