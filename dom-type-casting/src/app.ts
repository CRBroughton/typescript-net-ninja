// Classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }
}

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