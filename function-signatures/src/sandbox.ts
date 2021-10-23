// Example 1

// Function signatures allow use to define a functions
// parameters and return type

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(name, greeting);
}