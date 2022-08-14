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
