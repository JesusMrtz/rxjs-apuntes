import { of } from "rxjs";

const observable$ = of(1,2,3,4,5,6);


console.log('Inicio del observable');
observable$.subscribe({
    next: (value) => console.log(value),
    error: (error) => console.log(error),
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin del observable');
