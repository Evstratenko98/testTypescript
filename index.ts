 // Как работает keyof & typeof 
//  class obj  {
//     a:string = '1'
//     b:string =  '2'
// }
    
// let x: keyof obj = 'b'

// type newType = typeof x
// let y: newType = 'b'

// Перечисления
// enum Direction {
//     Up,
//     Down = 'Downn',
//     Left = 'Left',
//     Right = "Right"
// }

// type typeDirection = keyof typeof Direction
// const valueDirection: typeDirection = 'Down'

// import './patterns/bridge'

const res = 1_000_0

console.log(res)