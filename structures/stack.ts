class Stack<T> {
    stack: T[]

    constructor() {
        this.stack = []
    }

    add(item: T): Stack<T> {
        this.stack.splice(this.stack.length, 0, item)
        return this
    }

    getLast(): T {
        const lastItem: T = this.stack.splice(-1, 1)[0]     
        return lastItem
    }

    getAll(): T[] {
        return this.stack
    }
}

const stack = new Stack<string>().add('1').add('2').getAll()
