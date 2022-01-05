class TreeNode<T> {
    data: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null

    constructor(data: T) {
        this.data = data
        this.left = null
        this.right = null
    }
}

interface IBinaryTree<T> {
    insert(data: T): void
    inOrderTraverse(callback: (data: T) => any): void
    preOrderTraverse(callback: (data: T) => any): void
    postOrderTraverse(callback: (data: T) => any): void
    search(data: T, node: TreeNode<T> | null): TreeNode<T> | null
    remove(data: T): void
}

class BinaryTree<T> implements IBinaryTree<T>{
    private root: TreeNode<T> | null

    constructor() {
        this.root = null
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
        if(newNode.data < node.data) {
            if(node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode)
        }
        else {
            if(node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode)
        }
    }
    private inOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => any): void {
        if(node !== null) {
            if(node.left !== null) this.inOrderTraverseNode(node.left, callback)
            callback(node.data)
            if(node.right !== null) this.inOrderTraverseNode(node.right, callback)
        }
    }
    private preOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => any): void {
        if(node !== null) {
            callback(node.data)
            if(node.left !== null) this.inOrderTraverseNode(node.left, callback)
            if(node.right !== null) this.inOrderTraverseNode(node.right, callback)
        }
    }
    private postOrderTraverseNode(node: TreeNode<T> | null, callback: (data: T) => any): void {
        if(node !== null) {
            if(node.left !== null) this.inOrderTraverseNode(node.left, callback)
            if(node.right !== null) this.inOrderTraverseNode(node.right, callback)
            callback(node.data)
        }
    }
    private minNode(node: TreeNode<T>): TreeNode<T> {
        if(node.left === null) return node
        else return this.minNode(node.left)
    }
    private removeNode(data: T, node: TreeNode<T> | null): TreeNode<T> | null {
        if(node === null) return null
        else if(data < node.data) {
            if(node.left) node.left = this.removeNode(data, node.left)
            return node
        }
        else if(data > node.data) {
            if(node.right) node.right = this.removeNode(data, node.right)
            return node
        }
        else {
            if(node.left === null && node.right === null) {
                node = null
                return node
            }

            if(node.left === null) {
                node = node.right
                return node
            }
            else if(node.right === null) {
                node = node.left
                return node
            }

            let newNode = this.minNode(node.right)
            node.data = newNode.data
            node.right = this.removeNode(newNode.data, node.right)
            return node
        }
    }

    insert(data: T): void {
       if(this.root === null) this.root = new TreeNode(data)
       else this.insertNode(this.root, new TreeNode(data))
    }

    inOrderTraverse(callback: (data: T) => any): void {
        this.inOrderTraverseNode(this.root, callback)
    }

    preOrderTraverse(callback: (data: T) => any): void {
        this.preOrderTraverseNode(this.root, callback)
    }

    postOrderTraverse(callback: (data: T) => any): void {
        this.postOrderTraverseNode(this.root, callback)
    }

    search(data: T, node: TreeNode<T> | null = this.root): TreeNode<T> | null {
        if(node === null) return null
        if(node.data === data) return node
        return data < node.data ? this.search(data, node.left) : this.search(data, node.right) 
    } 

    remove(data: T): void {
        this.root = this.removeNode(data, this.root)
    }
}


const BST = new BinaryTree<number>()
BST.insert(10)
BST.insert(20)
BST.insert(5)
BST.insert(100)

// BST.inOrderTraverse(data => console.log(data))
// BST.preOrderTraverse(data => console.log(data))
// BST.postOrderTraverse(data => console.log(data))

BST.remove(20)
console.log(BST)
