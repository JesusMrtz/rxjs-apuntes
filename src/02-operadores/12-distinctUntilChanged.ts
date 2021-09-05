import { distinct, distinctUntilChanged, from, of } from "rxjs";

interface Personaje {
    name: string;
}


const personajes: Personaje[] = [
    {
        name: 'Spiderman'
    },
    {
        name: 'Spiderman'
    },
    {
        name: 'Spiderman'
    },
    {
        name: 'Jesús'
    },
    {
        name: 'Venom'
    }
];

const numbers$ = of(1, 1, 1, 43, 23, 11, 23, 192);

numbers$
.pipe(
    distinctUntilChanged()
)
.subscribe((response) => {
    console.log(response);
});

from(personajes).pipe(
    distinctUntilChanged((ant, actual) => ant.name === actual.name)
)
.subscribe(console.log)