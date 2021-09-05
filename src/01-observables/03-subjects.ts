import { count, Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.warn('Error: ', error),
    complete: () => console.log('Complete observer!!')
}

const interval$ = new Observable<number>((subscriber) => {
    const intervalID = setInterval(() => {
        subscriber.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});


const subject$ = new Subject<number>();
const subscription = interval$.subscribe(subject$);

const subscription1 = subject$.subscribe(observer);
const subscription2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500);