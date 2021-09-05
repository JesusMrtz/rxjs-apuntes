import { asyncScheduler, observeOn, range } from "rxjs";

const source$ = range(-5, 5).pipe(observeOn(asyncScheduler));


console.log('Inicio');
source$.subscribe({
    next: (value) => console.log(value)
});
console.log('Fin');