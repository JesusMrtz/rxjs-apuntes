import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

/*
ajax.patch(url, {
    id: 1,
    name: 'Jesus'
}, {
    'mi-token': 'ABC123'
}).subscribe(console.log);
*/

ajax({
    url,
    method: 'POST',
    headers: {
        'my-token': 'ABC123'
    },
    body: {
        id: 1,
        name: 'Jesus'
    }
})
.subscribe(console.log);