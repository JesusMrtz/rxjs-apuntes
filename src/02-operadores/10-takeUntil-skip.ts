import { interval, fromEvent, takeUntil, skip } from 'rxjs';

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';
document.querySelector('body').append(button);


const counter$ = interval(1000);
//const click$ = fromEvent(button, 'click');
const click$ = fromEvent(button, 'click')
.pipe(
    skip(1)
);

counter$
.pipe(
    takeUntil(click$)
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('COMPLETE!!!')
});