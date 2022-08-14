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
