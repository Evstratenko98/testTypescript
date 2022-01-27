export enum Exploitation {
  NONE = 0,
  HOURS = 1,
  KILO = 2,
}

interface localeConverter {
  downscaling(volume: number): number;
  upscaling(volume: number): number;
}

class rubblesConverter implements localeConverter {
  downscaling(volume: number): number {
    return volume * 100;
  }

  upscaling(volume: number): number {
    return volume / 100;
  }
}

class hoursConverter implements localeConverter {
  downscaling(volume: number): number {
    return volume * 60;
  }

  upscaling(volume: number): number {
    return volume / 60;
  }
}

class kilometerConverter implements localeConverter {
  downscaling(volume: number): number {
    return volume * 1000;
  }

  upscaling(volume: number): number {
    return volume / 1000;
  }
}

class milesConverter implements localeConverter {
  downscaling(volume: number): number {
    return volume * 1609;
  }

  upscaling(volume: number): number {
    return volume / 1609;
  }
}

type ChoiseConverters = rubblesConverter | hoursConverter | kilometerConverter | milesConverter

class Converter {
  exploitation: Exploitation | null;
  mainConverter: ChoiseConverters | null
  constructor(exploitation: Exploitation) {
    this.exploitation = null;
    this.mainConverter = null;

    switch (exploitation) {
      case Exploitation.KILO:
        this.mainConverter = new kilometerConverter();
      case Exploitation.HOURS:
        this.mainConverter = new hoursConverter();  
      default:
        throw "Wrong exploitation selected";
    }
  }

  downscaling(volume: number): number {
    return this.mainConverter!.downscaling(volume);
  }

  upscaling(volume: number): number {
    return this.mainConverter!.upscaling(volume);
  }
}
