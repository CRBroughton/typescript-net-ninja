import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js'

// Generics

// Generics capture the types of the properties / object
// that is passed in. 

// By using the extends option, you can tell the generic
// that whatever is passed in must start and extend as that type

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}
let uidOne = addUID({name: 'yoshi', age: 40})

console.log(uidOne.name)

// Generics with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
}

// Interfaces with Classes

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('yoshi', 'web work', 250)
docTwo = new Payment('mario', 'plumbing work', 200)


let docs: HasFormatter[] = [];

// items going into this array have to have the HasFormatter interface

docs.push(docOne)
docs.push(docTwo)

// Interfaces

// Interfaces define how a type should be structured. A variable without that
// strict definition won't be allowed. Below is the me const which uses the isPerson
// interface.
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: 'shaun',
    age: 31,
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        console.log('I spent', amount)
        return amount
    }
}

const greetPerson = (person: isPerson) => {
    console.log('hello ', person.name)
}

greetPerson(me)

// console.log(me)

// const invOne = new Invoice('mario', 'work on the mario website', 250)

// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// console.log(invoices)

// the ! is us saying "I know this exists"
// You could also either wrap the console.log
// in a if check
const anchor = document.querySelector('a')!;

console.log(anchor.href);

// This is an example of type casting:
// we are explicitly saying that the form is of a type
// HTMLFormElement. Without this, because we are using
// a CSS class, Typescript doesn't know what sort of
// element form is.

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);


// inputs

const type = document.querySelector('#type') as HTMLSelectElement;

const toFrom = document.querySelector('#toFrom') as HTMLInputElement;

const details = document.querySelector('#details') as HTMLInputElement;

const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')

})