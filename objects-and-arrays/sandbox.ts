// Arrays
let names = ['luigi', 'mario', 'yoshi']

// It is not possible to push a number to an array that
// only contains strings, unless explicitly allowed
// names.push(3)

// Mixed arrays

let mixed = ['ken', 4, 'chun-li', 8, 9]
mixed.push('ryu')
mixed.push(10)
mixed[0] = 3


// Objects

let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40
ninja.name = 'ryu'

// If you override an object, the structure of that object need to match
// The below example won't work because it is missing age

// ninja = {
//     name: 'yoshi',
//     belt: 'orange',
// }