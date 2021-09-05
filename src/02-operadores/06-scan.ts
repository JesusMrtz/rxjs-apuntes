import { from, interval } from "rxjs";
import { map, reduce, scan, take, tap } from 'rxjs/operators';


interface User {
    id?: string;
    auth?: boolean;
    token?: string;
    age?: number;
};

/*
interval(1000)
.pipe(
    scan((acc, value) => acc + value)
)
.subscribe({
    next: (next) => console.log('Next', next),
    complete: () => console.log('COMPLETADO!!!')
});
*/


const users: User[] = [
    {
        id: '1',
        auth: false,
        token: null
    },
    {
        id: '2',
        auth: true,
        token: 'ABC'
    },
    {
        id: '3',
        auth: true,
        token: 'ABC123'
    }
]

const state$ = from<User[]>(users).pipe(
    scan((acc, current) => {
        return {...acc, ...current}
    }, {age: 33})
);

const id$ = state$.pipe(
    map((state) => state['id'])
);
    
id$.subscribe(console.log);