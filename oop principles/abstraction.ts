// Абстракция - использование только тех характеристик в сущности, которые наиболее точно описывают её в 
// создаваемой среде

interface ICar {
    model: string
    price: number
    speed: number
    drive(): void
}

abstract class Car implements ICar{
    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {}

    drive(): void {}
}