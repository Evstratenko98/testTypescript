// Liskov Substitution Principleанов
// Принцип подстановки

// Дочерний класс должен дополнять, а не замещать поведение родительского класса
// Т.е. полиморфизм может сломать логику класса, если мы начнем переопределять методы новой логикой

class Weapon2 {
    title: string
    damage: number

    constructor(title: string, damage: number) {
        this.title = title
        this.damage = damage
    }

    attack(): void {
        console.log("Нанесен урон в размере " + this.damage)
    } 
}

class Sword2 extends Weapon { // Наследование
    constructor(title: string, damage: number) {
        super(title, damage)
    }

    // НАРУШЕНИЕ ПРИНЦИПА!

    // attack(): void {
    //     console.log("А теперь вместо атаки персонаж начинаеь убегать")
    // }

    defense(): void {
        console.log('Защита от полученного урона!')
    }
}