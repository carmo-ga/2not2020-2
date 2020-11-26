// Aula 19/11/2020
class Node {
    constructor(value) {
        this.data = value
        this.left = null    // Esquerda
        this.right = null   // Direita
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null    // Raiz da árvore
    }

    insert(value) {
        let node = new Node(value)

        // Inserção no nodo raiz (primeiro nodo)
        if(this.root === null) this.root = node
        // Busca recursiva pelo local correto de inserção
        else this.insertNode(node, this.root)
    }

    // Insere um nodo em uma subárvore a partir da raiz indicada
    // Parâmetros:
    // - node: o nodo a ser inserido
    // - root: o nodo A PARTIR do qual será efetuada a busca
    insertNode(node, root) {
        if(node.data < root.data) {  // Lado esquerdo
            // Possibilidade 1: a esquerda do nó raiz está livre
            if(root.left === null) root.left = node   // O nodo entra no lugar livre
            // Possibilidade 2: esquerda ocupada, reinicia a busca a partir desse nodo como raiz
            else this.insertNode(node, root.left)
        }
        else if(node.data > root.data) {  // Lado direito
            if(root.right === null) root.right = node
            else this.insertNode(node, root.right)
        }
    }

    // Percurso em ordem
    inOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            this.inOrderTraversal(fnCallback, root.left)  // Subárvore esquerda
            fnCallback(root.data)  // Nó raiz
            this.inOrderTraversal(fnCallback, root.right)  // Subárvore direita
        }
    }

    // Percurso pré-ordem
    preOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            fnCallback(root.data)  // Nó raiz
            this.preOrderTraversal(fnCallback, root.left)  // Subárvore esquerda
            this.preOrderTraversal(fnCallback, root.right)  // Subárvore direita
        }
    }

    // Percurso pós-ordem
    posOrderTraversal(fnCallback, root = this.root) {
        if(root != null) {
            this.posOrderTraversal(fnCallback, root.left)
            this.posOrderTraversal(fnCallback, root.right)
            fnCallback(root.data)
        }
    }

    // Retorna o menor valor armazenado na árvore
    min() {
        let minimum = this.minNode(this.root)
        
        if(minimum) return minimum.data
        else null
    }

    // Retorna o nodo cujo data é o menor valor da árvore
    minNode(root) {
        let minimum = root
        // Vira à esquerda no root e desce reto "toda a vida"
        while(minimum != null && minimum.left != null) {
            minimum = minimum.left
        }
        return minimum
    }

    // Retorna o maior valor armazenado na árvore
    max() {
        let maximum = this.maxNode(this.root)
        
        if(maximum) return maximum.data
        else null
    }

    // Retorna o nodo cujo data é o maior valor da árvore
    maxNode(root) {
        let maximum = root
        // Vira à direita no root e desce reto "toda a vida"
        while(maximum != null && maximum.right != null) {
            maximum = maximum.right
        }
        return maximum
    }
}