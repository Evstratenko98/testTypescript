// Ducks
// Паттерн стратегия

// Паттерн Стратегия определяет семейство алгоритмов, инкапсулирует
// каждый из них и обеспечивает их взаимозаменяемость.
// Он позволяет модифицировать алгоритмы независимо
// от их использования на стороне клиента.

interface FlyBehavior {
  fly: () => void;
}

interface QuackBehavior {
  quack: () => void;
}

interface DuckBehavior {
  fly: FlyBehavior;
  quack: QuackBehavior;
}

// Программирование должно идти на уровне интерфейсов, а не на уровне реализации

// Изменяемые методы выносятся и главного класса и делигируются другими классами поведения

class Fly implements FlyBehavior {
  fly() {
    console.log('im flying');
  }
}

class NotFly implements FlyBehavior {
  fly() {
    console.log('im not flying');
  }
}

class Quack implements QuackBehavior {
  quack() {
    console.log('im quacking');
  }
}

abstract class Duck {
  flyBehavior: FlyBehavior = new Fly();
  quackBehavior: QuackBehavior = new Quack();

  performFly() {
    return this.flyBehavior.fly();
  }

  perfromQuack() {
    return this.quackBehavior.quack();
  }

  // Далее идут статичные методы
}

abstract class SuperDuck {
  private flyBehavior: FlyBehavior = new Fly();
  private quackBehavior: QuackBehavior = new Quack();

  constructor(behavior: DuckBehavior) {
    this.flyBehavior = behavior.fly;
    this.quackBehavior = behavior.quack;
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  performFly() {
    return this.flyBehavior.fly();
  }

  performQuack() {
    return this.quackBehavior.quack();
  }
}

class CommonDuck extends SuperDuck {
  constructor() {
    super({
      fly: new Fly(),
      quack: new Quack(),
    });
  }

  display() {
    this.performFly();
    this.performQuack();
  }
}

// const DuckDavid = new CommonDuck();
// DuckDavid.setFlyBehavior(new NotFly());
// DuckDavid.display();

// Композиция лучше наследования!

class DuckManok {
  private quackBehavior: QuackBehavior;

  constructor(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  performQuack() {
    return this.quackBehavior.quack();
  }
}



// Наблюдатель

interface Subject {
  registerObserver: (observer: Observer) => void;
  removeObserver: () => void;
  notifyObserver: () => void;
  getTemperature: number;
}

interface Observer {
  update: () => void;
}

interface Display {
  display: () => void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  get getTemperature(): number {
    return this.temperature;
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver() {

  }

  notifyObserver() {
    this.observers.map((observer: Observer) => {
      observer.update();
    })
  }
}

class ConditionsDisplay implements Observer, Display {
  private subject: Subject;
  private temperature: number = 0;

  constructor(subject: Subject) {
    this.subject = subject;
    subject.registerObserver(this);
  }

  display() {}

  update() {
    this.temperature = this.subject.getTemperature;

    this.display();
  }
}

// Cлабо связанный объект почти ничего не знает о внутреннем устройстве другого объекта
// Здесь наш Объект знает только о методе update у наблюдателей, которые следят за изменениями.

// Принцип проектирования
// Стремитесь к слабой связанности взаимодействующих объектов.

// Принцип проектирования
// Классы должны быть открыты для расширения,
// но закрыты для изменения.




class Parent {
  public test2() {
    console.log('test2')
  }
}

class Child extends Parent {
  public test() {
    console.log('test1')
  }

  public test2() {
    this.test()
  }
}

const obj = new Child();
obj.test();






// Паттерн декоратор
abstract class Beverage {
  public description: string = '';
  public price: number = 0;

  getDescription(): string {
    return this.description;
  };

  cost(): number {
    return this.price;
  };
}

abstract class CondimentDecorator extends Beverage {
  public beverage!: Beverage;

  getDescription(): string {
    return this.getDescription();
  }
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 2;
  }
}

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.getDescription() + "Mocha"
  }

  cost() {
    return this.beverage.cost() + 0.5;
  }
}

// const espresso = new Espresso();
// const espressoWithMocha = new Mocha(espresso);
// const espressoWithMochaX2 = new Mocha(espressoWithMocha);

// const res = espressoWithMochaX2.cost();
// console.log(res);






// Паттерн фабрика
// Фабрика инкапсулирует подробности создания объектов