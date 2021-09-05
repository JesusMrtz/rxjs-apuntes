import { from } from "rxjs"

const observer = {
    next: (value) => console.log('Next: ', value),
    complete: () => console.log('Completado')
}

const myGenerate = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myIterable = myGenerate();



// const source$ = from([1, 2, 3, 4]);

//const source$ = from(fetch('http://api.github.com/users/klerith'));
/*
source$.subscribe(async (response) => {
    const json = await response.json();
    console.log(json);
});
*/

from(myIterable).subscribe(observer);