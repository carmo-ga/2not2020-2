// Aula 05/11/2020
/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite inserções e remoções em qualquer um dos seus lados
*/
module.exports = class Deque {
    constructor() {
        this.data = []
    }

    // Inserir no ínicio da fila
    insertFront(value) {
        this.data.unshift(value)
    }

    // Inserir no fim da fila
    insertRear(value) {
        this.data.push(value)
    }

    // Remover do início da fila
    removeFront() {
        return this.data.shift()
    }

    // Remover do fim da fila
    removeRear() {
        return this.data.pop()
    }

    // Verifica - mas não retira - o valor do início da fila ("olhadinha")
    peekFront() {
        return this.data[0]
    }

    // Verifica - mas não retira - o valor do final da fila ("olhadinha")
    peekRear() {
        return this.data[this.data.length - 1]
    }

    // Tamanho
    size() {
        return this.data.length
    }
}