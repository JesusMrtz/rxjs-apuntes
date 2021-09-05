import { range, tap } from "rxjs";
import { map } from 'rxjs/operators';

const numeros$ = range(1, 5);


numeros$.pipe(
    tap(x => console.log('Antes', x)),
    map((value) => value * 10),
    tap(x => console.log('Después', x))
)
.subscribe((value) => console.log('subs: ', value));