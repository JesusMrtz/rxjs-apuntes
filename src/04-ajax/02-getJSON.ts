import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';
const url2 = 'https://api.github.com/users?per_page=5'

const observable$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'my-token': 'ABC123'
});
observable$.subscribe(console.log);