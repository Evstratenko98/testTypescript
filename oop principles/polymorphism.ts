// Полиморфизм - одно действие, множество реализаций 

interface ICar {
    model: string
    price: number
    speed: number
    drive(): void
}

abstract class Car4 implements ICar{
    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {}

    drive(): void {}
}

class BMW3 extends Car3 {
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

class BMW4 extends Car3 {
    constructor(
        public price: number,
        public speed: number
    ) {
        super('BMW', price, speed)
    }
    
    // Это не 
    drive() {
        console.log('raw - raw')
    }
}