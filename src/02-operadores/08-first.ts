import { first, fromEvent, map } from 'rxjs';
const click$ = fromEvent<MouseEvent>(document, 'click');


click$
.pipe(
    first(event => event.clientY >= 100),
    map(({ clientX, clientY }) => ({clientX, clientY}))
)
.subscribe({
    next: (value) => console.log('next: ', value),
    complete: () => console.log('Completado!!!')
});