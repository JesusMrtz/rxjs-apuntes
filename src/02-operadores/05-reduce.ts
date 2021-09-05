import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators';

interval(1000)
.pipe(
    take(10),
    tap(console.log),
    reduce((acc, value) => acc + value)
)
.subscribe({
    next: (next) => console.log('Next', next),
    complete: () => console.log('COMPLETADO!!!')
});