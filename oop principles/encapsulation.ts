// Инкапсуляция - групировка данных на отдельные сущности, удобные для человеческого восприятия

interface ICar {
    model: string
    price: number
    speed: number
    drive(): void
}

abstract class Car2 implements ICar{
    constructor(
        public model: string,
        public price: number,
        public speed: number
    ) {}

    drive(): void {}
}