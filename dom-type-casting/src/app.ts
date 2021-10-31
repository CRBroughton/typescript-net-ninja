import { Invoice } from "./classes/Invoice.js"

const invOne = new Invoice('mario', 'work on the mario website', 250)

const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices)

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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value, 
        details.value, 
        amount.valueAsNumber)
})