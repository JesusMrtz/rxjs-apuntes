import { fromEvent, Observer } from "rxjs";

// Escuchar el evento click del todo el documento
const source1$ = fromEvent<PointerEvent>(document, 'click');
// Escuhar el evento cuando presionas cualquier tecla del todo el documento
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('error: ', error),
    complete: () => console.log('Complete')
};

source1$.subscribe((event) => {
    console.log(event.x);
    console.log(event.y);
});

source2$. subscribe((event) => {
    console.log(event.key)
});