import { Observable, Observer } from "rxjs";

const observable$ = new Observable<string>(subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzar un error
    //subscriber.error('Valio madres');

    subscriber.next('Mi nombre es Jesús');
    // Ya no se emitirá nada a partir de aqui
    subscriber.complete();

    subscriber.next('Guapo');
    subscriber.next('Gato');
});

const observer: Observer<string> = {
    next: (value) => console.log('next: ', value),
    error: (error) => console.error('Error: ', error),
    complete: () => console.log('Complete observer!!')
}


observable$.subscribe(observer);