import { interval, timer } from "rxjs";

const observer = {
    next: (value) => console.log('next: ', value),
    complete: () => console.log('Complete!!!!')
};

const today5seg = new Date();
today5seg.setSeconds(today5seg.getSeconds() + 5);

// Creación de observables
const interval$ = interval(5000);

/**Inicia a partir de 2 segundos**/
//const timer$ = timer(2000);

/**Inicia a partir de 2 segundos y después cada segundo muestra nuevos valores**/
//const timer$ = timer(2000, 1000);

const timer$ = timer(today5seg);


console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');