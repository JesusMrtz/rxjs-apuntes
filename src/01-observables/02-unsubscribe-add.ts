import { count, Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('Error: ', error),
    complete: () => console.log('Complete observer!!')
}


const interval$ = new Observable<number>((subscriber) => {
    let counter = 1;

    const interval = setInterval(() => {
        subscriber.next(counter);
        counter++;
        subscriber.complete();
    }, 2500);

   return () => {
        clearInterval(interval);
        console.log('Intervalo destruido')
    };
});

// Esto retorna una subscription
const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2);
subscription1.add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    console.log ('Completado intervalo');
}, 3000);