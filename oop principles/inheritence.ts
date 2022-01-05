// Наследование - получение функциональности дочерним классом своего родительского класса

interface ICar {
    model: string
    price: number
    speed: number
    drive(): void
}

abstract class Car3 implements ICar{
    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {}

    drive(): void {}
}

class BMW extends Car3 {
    constructor(
        public price: number,
        public speed: number
    ) {
        super('BMW', price, speed)
    }

    drive() {
        console.log('Wrum - wrum')
    }
}