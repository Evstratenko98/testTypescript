// Interface segregation principle
// Принцип разделения интерфейсов

// Программные сущности не должны зависить от методов, которые они не используют
// Нельзя клиента заставлять реализовывать интерфейс, которым он не пользуется

// Нужно стараться разделять интерфейсы, а не делать супер общее решение 


// Мы не создаем один большой интерфейс
// Мы создаем два отдельных интерфейса, тк. у нашего третьего класса реализуется только один метод из двух предложенных
interface Attacker {
    attack(): void
}

interface Reloader {
    reload(): void
}

// Можно имплементировать сразу два интерфейса помимо создания наследования (не антипаттерн!) 
class Pistolet implements Attacker, Reloader{
    constructor() {}
    attack(): void {}
    reload(): void {}
}

class RPG implements Attacker, Reloader{
    constructor() {}
    attack(): void {}
    reload(): void {}
}

class Knife implements Attacker {
    constructor() {}
    attack(): void {}
}