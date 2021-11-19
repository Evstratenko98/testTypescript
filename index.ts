// // Принципы ООП

// // Инкапсуляция
// class Hero {
//     name: string;
//     hp: number;

//     constructor(name: string) {
//         this.name = name;
//         this.hp = 100;
//     }

//     levelUp() {
//         this.hp += 10;
//         return this;
//     }

//     getHp() {
//         return this.hp;
//     }

//     say() {
//         console.log("Im a Hero!");
//     }
// }

// const knight = new Hero("Ronald");
// // console.log(knight.levelUp().getHp());

// // Наследование
// class Mage extends Hero {
//     mana: number;

//     constructor(name: string) {
//         super(name);

//         this.mana = this.hp;
//     }

//     levelUp() {
//         this.hp += 10;
//         this.mana += 10;

//         return this;
//     }

//     getHp() {
//         return this.hp;
//     }
//     getMana() {
//         return this.mana;
//     }

//     // Полиморфизм - используется старый, но перезаписанный метод
//     say() {
//         console.log()
//     }
// }

// // const Merlin = new Mage("Merlin");
// // console.log(Merlin);

// //Полиморфизм

console.log(123);
