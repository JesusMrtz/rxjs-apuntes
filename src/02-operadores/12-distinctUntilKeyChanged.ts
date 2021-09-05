import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";

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



from(personajes).pipe(
    distinctUntilKeyChanged('name')
)
.subscribe(console.log)