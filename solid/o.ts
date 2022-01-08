// Open-closed principle
// Принцип открытия - закрытия
// Сущности должны быть открыты для расширения, но закрыты для изменения

class Weapon {
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

class Sword extends Weapon { // Наследование
    constructor(title: string, damage: number) {
        super(title, damage)
    }

    defense(): void {
        console.log('Защита от полученного урона!')
    }
}

const excalibur = new Sword('Excalibur', 100)

excalibur.attack()
excalibur.defense()