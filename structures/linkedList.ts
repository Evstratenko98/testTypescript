class LinkedNode<T> {
    value: T
    next: LinkedNode<T> | null

    constructor(value: T) {
        this.value = value
        this.next = null
    }
}

interface ILinkedList<T> {
    addAtEnd(value: T): LinkedNode<T>
    deleteNode(node: LinkedNode<T>): ILinkedList<T>
    traverse(): T[]
    size(): number
    search(value: T): LinkedNode<T> | null
}

class LinkedList<T> implements ILinkedList<T>{
    private head: LinkedNode<T> | null

    constructor() {
        this.head = null
    }

    private getLast(listedNode: LinkedNode<T>): LinkedNode<T> {
        return listedNode.next ? this.getLast(listedNode.next) : listedNode
    } 
    private getPrevDeletedNode(listedNode: LinkedNode<T>, node: LinkedNode<T>): LinkedNode<T> {
        return listedNode.next === node ? listedNode : this.getPrevDeletedNode(listedNode.next!, node)
    }
    private addToArray(listedNode: LinkedNode<T>, arrNodes: T[] = []): T[] {
        arrNodes.push(listedNode.value)
        return listedNode.next ? this.addToArray(listedNode.next, arrNodes) : arrNodes
    }
    private searchNode(node: LinkedNode<T>, value: T): LinkedNode<T> | null {
        return node.value === value ? node : node.next ? this.searchNode(node.next, value) : null
    }

    addAtEnd(value: T): LinkedNode<T> {
        const node = new LinkedNode(value)
        if(!this.head) {
            this.head = node
        }
        else {
            let lastNode: LinkedNode<T> | null = this.getLast(this.head)
            lastNode.next = node
        } 
        return node  
    }

    deleteNode(node: LinkedNode<T>): LinkedList<T> {
        if(!this.head) return this
        if(this.head === node) this.head = node.next
        else {
            let prevDeletedNode: LinkedNode<T> = this.getPrevDeletedNode(this.head!, node)
            prevDeletedNode.next = node.next
        }
        return this
    }

    traverse(): T[] {
        if(!this.head) return []
        return this.addToArray(this.head)
    }

    size(): number {
        return this.traverse().length
    }

    search(value: T): LinkedNode<T> | null {
        let node = this.head
        
        if(!node) return null
        return this.searchNode(node, value)
    }
}

const list = new LinkedList<number>()
const node1 = list.addAtEnd(10)
const node2 = list.addAtEnd(22)

console.log(list.search(10))