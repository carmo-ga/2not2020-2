// Aula 12/11/2020
/*
    Estrutura de dados Lista Endadeada
*/
class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.next = null    // Ponteiro para o próximo nodo
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null   // A lista inicia "sem cabeça"
        this.count = 0
    }

    // Inserir no fim da lista
    push(value) {
        let node = new Node(value)

        // Caso especial: a lista está vazia
        if(this.count === 0) {
            this.head = node
        }
        else {
            let posicaoNode = this.head
            // Percurso da lista para encontrar o último elemento
            while(posicaoNode.next !== null) {
                posicaoNode = posicaoNode.next
            }
        }
        // O último elemento ganha um nodo depois dele
        this.count++
    }
    
    // Retorna tamanho da lista
    size() {
        return this.count
    }

    // Transforma a lista em uma representação string para visualização
    toString() {
        let output = '{ '
        let node = this.head
        while(node !== null) {
            output += node.data + ' '
            node = node.next
        }
        output += ' }'
        return output
    }

    // Insere um valor em uma posição informada pelo usuário
    insertAt(position, value) {
        // Validação da posição
        if(position >= 0 && position <= this.count) {
            let node = new Node(value)

            // Caso especial: inserção na posição 0
            if(position === 0) {
                node.next = this.head
                this.head = node   // Temos uma nova cabeça na lista
            }
            // Caso especial: inserção na última posição
            else if(position === this.count) {
                // Redireciona para o push
                this.push(value)
                return // Evita que this.count++ seja excutado novamente
            }
            else {
                let posicaoNode = this.head, nodePrev = null
                // O loop for começa em 1 porque 0 é o head e já está no nodePos
                for(let i = 1; i <= position; i++) {
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                // O novo node passa a apontar para o próximo do node atual da posição
                node.next = nodePos.next
                // O node anterior passa a apontar para o novo node
                nodePrev.next = node
            }
            this.count++
        }
    }
}