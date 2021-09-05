import { distinct, from, of } from "rxjs";

interface Personaje {
    name: string;
}


const personajes: Personaje[] = [
    {
        name: 'Spiderman'
    },
    {
        name: 'Venom'
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
    distinct()
)
.subscribe((response) => {
    console.log(response);
});

from(personajes).pipe(
    distinct(personaje => personaje.name)
)
.subscribe(console.log)