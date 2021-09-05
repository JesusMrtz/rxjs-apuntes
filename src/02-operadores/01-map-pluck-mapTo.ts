import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

/**
const observable$ = range(1, 5)
.pipe(
    map((value) => value * 10)
)
.subscribe(console.log);
**/

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyUpCode$ = keyup$.pipe(map((event) => event.code));

const keyUpPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);

keyup$.subscribe(console.log);
keyUpCode$.subscribe((code) => console.log('map: ', code));
keyUpPluck$.subscribe((code) => console.log('Pluck: ', code));
keyUpMapTo$.subscribe((code) => console.log('MapTo: ', code));