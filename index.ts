class obj  {
    a:string = '1'
    b:string =  '2'
}

// Как работает keyof & typeof 
let x: keyof obj = 'b'

type newType = typeof x
let y: newType = 'b'

// Перечисления
enum Direction {
    Up,
    Down = 'Downn',
    Left = 'Left',
    Right = "Right"
}

type typeDirection = keyof typeof Direction
const valueDirection: typeDirection = 'Down'

let date1: Date = new Date()
let date2: Date = new Date()

setTimeout(() => {
    date2 = new Date('2022-01-15')
    console.log(date1 > date2)
}, 1000)



