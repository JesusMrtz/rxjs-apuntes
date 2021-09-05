import { debounceTime, fromEvent, map, pluck, distinctUntilChanged } from 'rxjs';

/** Ejemplo 1 */
/*
const click$ = fromEvent<PointerEvent>(document, 'click');


click$
.pipe(
    debounceTime(1000)
)
.subscribe(console.log);
*/

/** Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');


input$
.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);