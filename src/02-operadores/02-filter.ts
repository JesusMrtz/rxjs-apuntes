import { from, range, fromEvent } from 'rxjs';
import { filter, pluck } from "rxjs/operators";

/*
const range$ = range(1, 10).pipe(
    filter((value) => value % 2 === 1)
)
.subscribe(console.log);
*/


const range$ = range(1, 10).pipe(
    filter((value, index) => {
        console.log('index: ', index);
        return value % 2 === 1;
    })
)

interface Personaje {
    tipo: string;
    nombre: string;
};
const personaje: Personaje[] = [
    {
        tipo: 'Heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'Heroe',
        nombre: 'Spiderman'
    },
    {
        tipo: 'Villano',
        nombre: 'Joker'
    }
];


from(personaje)
.pipe(
    filter<Personaje>((personajes) => personajes.tipo === 'Heroe')
).subscribe(console.log);



const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    pluck('code'),
    filter((key) => key === 'Enter')
);


keyup$.subscribe(console.log);