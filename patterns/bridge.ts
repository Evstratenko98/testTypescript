import currency from "currency.js";

export enum Exploitation {
  NONE = 0,
  HOURS = 1,
  KILO = 2,
}

interface LocaleConverter {
  downscaling(volume: number): number;
  upscaling(volume: number): number;
}

class NoneConverter implements LocaleConverter {
  downscaling(volume: number): number {
    return volume;
  }

  upscaling(volume: number): number {
    return volume;
  }
}

class RubblesConverter implements LocaleConverter {
  downscaling(volume: number): number {
    return volume * 100;
  }

  upscaling(volume: number): number {
    return volume / 100;
  }
}

class HoursConverter implements LocaleConverter {
    downscaling(volume: number): number {
    const integer: number = Math.trunc(volume);
    const decimal = Number(volume.toString().split('.')[1]);

    return currency(integer).multiply(60).add(decimal).value;
  }

  upscaling(volume: number): number {
    const minutes: number = volume % 60;
    const minutesInTwoDigits: string =
      minutes.toString().length === 1 ? '0' + minutes : minutes.toString();
    const hours: string = currency(volume)
      .subtract(minutes)
      .divide(60)
      .value.toString();

    return Number(hours + '.' + minutesInTwoDigits);
  }
}

class KilometerConverter implements LocaleConverter {
  downscaling(volume: number): number {
    return currency(volume, { precision: 3 }).multiply(1000).value;
  }

  upscaling(volume: number): number {
    return currency(volume, { precision: 3 }).divide(1000).value;
  }
}

class MilesConverter implements LocaleConverter {
  downscaling(volume: number): number {
    return volume * 1609;
  }

  upscaling(volume: number): number {
    return volume / 1609;
  }
}

const converterMatching = {
  [Exploitation.NONE]: new NoneConverter(),
  [Exploitation.HOURS]: new HoursConverter(),
  [Exploitation.KILO]: new KilometerConverter(),
}

class Converter implements LocaleConverter {
  private exploitation: Exploitation;
  constructor(exploitation: Exploitation) {
    this.exploitation = exploitation;
  }

  downscaling(volume: number): number {
    return converterMatching[this.exploitation].downscaling(volume)
  }

  upscaling(volume: number): number {
    return converterMatching[this.exploitation].upscaling(volume)
  }
}

const conv = new Converter(Exploitation.HOURS)