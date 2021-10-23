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

console.log(form.children);