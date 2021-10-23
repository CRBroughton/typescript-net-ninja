// Example 1

// Function signatures allow use to define a functions
// parameters and return type

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(name, greeting);
}

// Example 2

// The below example will break if you remove the last return,
// because this functions signature requires a return of a
// number.

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    return numOne - numTwo;
}

// Example 3

let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number}

logDetails = (ninja: person) => {
    console.log(ninja.name, ninja.age);
}