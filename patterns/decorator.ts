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
