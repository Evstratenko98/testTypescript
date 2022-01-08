// Single responsibility
// Принцип единственной ответсвенности
// 1 сущность - 1 задача (1 логический кусок кода)
interface IUser {}

// Создание абстракции пользователя
class User implements IUser{
    name: string
    age: number 

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

// Взаимодействие экземпляра пользователя с бд
class UserService {
    entity: IUser

    constructor(entity: IUser) { // Композиция - полем класса является другой класс
        this.entity = entity
    }

    save() {} // логика сохрания
    remove() {} // удаления
    put() {} // изменения
}

const user = new User('David', 20)

const userService = new UserService(user)