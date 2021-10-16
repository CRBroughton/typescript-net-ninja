// These variables are inferred types: Typescript is inferring the types based on what is set

let character  = 'mario'
let age = 30
let isBlackBelt = false

// character cannot be set to 2, because character is already a string
// character = 2

// age however can be set to another number, because it already is a number
age = 40

// isBlackBelt can be set to true, because it is already a boolean
// however it cannot be set to anything else
isBlackBelt = true


// The below function is using a declared typed variable
// Uncommenting out the consol.log shows that a string cannot be passed
const circ = (diameter: number) => {
    return diameter * Math.PI
}

// console.log(circ('hello'))