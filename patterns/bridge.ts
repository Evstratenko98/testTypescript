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
    return volume * 60;
  }

  upscaling(volume: number): number {
    return volume / 60;
  }
}

class KilometerConverter implements LocaleConverter {
  downscaling(volume: number): number {
    return volume * 1000;
  }

  upscaling(volume: number): number {
    return volume / 1000;
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

const conv = new Converter(Exploitation.KILO)