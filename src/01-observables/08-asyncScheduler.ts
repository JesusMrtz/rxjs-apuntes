import { asyncScheduler } from "rxjs";

const sayHello = () => console.log('Hola mundo');
const sayHello2 = (name) => console.log(`Hola ${name}`);

/** Utilizarlo como setTimeOut */
//asyncScheduler.schedule(sayHello, 3000);
//asyncScheduler.schedule(sayHello2, 2000, 'Jesús');

/** 
 * Utilizarlo como setInterval
 * No puede ser un arrow function
*/
const subscription = asyncScheduler.schedule(function(state) {
    console.log('State: ', state);
    this.schedule(state + 1, 1000);
}, 3000, 1);


setTimeout(() => {
    subscription.unsubscribe();
}, 6000);