import { debounceTime, fromEvent, map, pluck, distinctUntilChanged, throttleTime, asyncScheduler } from 'rxjs';

/** Ejemplo 1 */

const click$ = fromEvent<PointerEvent>(document, 'click');


click$
.pipe(
    throttleTime(3000)
)
.subscribe(console.log);


/** Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');


input$
.pipe(
    throttleTime(500, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe(console.log);