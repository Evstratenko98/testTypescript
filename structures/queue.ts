class Queue<T> {
    queue: T[]

    constructor() {
        this.queue = []
    }

    add(item: T): Queue<T> {
        this.queue.splice(0,0, item)
        return this
    }

    getLast(): T {
        const item = this.queue.splice(-1, 1)[0]   
        return item
    }

    getAll(): T[] {
        return this.queue
    }
}

const queue = new Queue<number>().add(1).add(2).getLast()
