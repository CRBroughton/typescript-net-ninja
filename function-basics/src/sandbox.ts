// Typescript will infer that the below is a function type
// You can also declare the type:

// let greet: Function

// notice how the Function type uses a capital letter

let greet = () => {
    console.log('hello, world!')
}

// Optional types / arguments

// Option arguments are prefixed with a ? mark
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b, c)
}

// If we wanted a default value, we could do the following:

const addDefault = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b, c)
}

// making c defaulting to 10 unless specified

// it is also possible to specify the return type
const returnType = (a: number, b: number): number => {
    return a + b
}