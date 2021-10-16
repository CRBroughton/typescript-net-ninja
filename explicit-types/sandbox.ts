// Explicit types

let character: string
let age: boolean
let isLoggedIn: boolean

// Arrays

// ninjas is now an array of strings
let ninjas: string[] = []

// Union types

// Union types allow for multiple types
// Array unions require () for type declarations
let mixed: (string|number)[] = []

let uid: string|number

// Objects
let ninjaOne: object
ninjaOne = { name: 'yoshi', age: 30}

// Obejcts can also have explicitly set properties
// within the object declaration
let ninjaTwo: {
    name: string,
    age: number,
    beltColour: string
}
