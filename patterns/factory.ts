enum MACHINE_TYPE {
    TRUCK = 'truck',
    BOLIDE = 'bolide'
}

interface IMachine {
    title: string
}

interface ITruck extends IMachine{
    transportation: string
}

interface IBolide extends IMachine{
    racing: string
}

class Machine implements IMachine {
    title: string

    constructor(title: string) {
        this.title = title
    }
}

class Truck extends Machine implements ITruck{
    transportation: string

    constructor(properties: ITruck) {
        super(properties.title)
        this.transportation = properties.transportation
    }
}

class Bolide extends Machine implements IBolide {
    racing: string;

    constructor(properties: IBolide) {
        super(properties.title)
        this.racing = properties.racing
    }   
}


class MachineFactory {
    public static getMachine(type: MACHINE_TYPE.TRUCK, properties: ITruck): Truck
    public static getMachine(type: MACHINE_TYPE.BOLIDE, properties: IBolide): Bolide
    public static getMachine(type: MACHINE_TYPE, properties: ITruck & IBolide) {
        switch (type) {
            case MACHINE_TYPE.TRUCK:
                return new Truck(properties)
            case MACHINE_TYPE.BOLIDE:
                return new Bolide(properties)
            default:
                throw new Error('Wrong type machine')
        }
    }
}

const ferrary = MachineFactory.getMachine(MACHINE_TYPE.BOLIDE, {
    title: 'Ferrary',
    racing: "Italy"
})

const kamaz = MachineFactory.getMachine(MACHINE_TYPE.TRUCK, {
    title: "Kamaz",
    transportation: "metal"
})
