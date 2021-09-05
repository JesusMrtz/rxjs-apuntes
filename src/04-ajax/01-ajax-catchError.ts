import { catchError, of, pluck, throwError } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/userss?per_page=5';

ajax(url)
.pipe(
    pluck('response'),
    catchError((error: AjaxError) => {
        console.warn('error en:', error);
        return [];
    })
)
.subscribe(console.log);