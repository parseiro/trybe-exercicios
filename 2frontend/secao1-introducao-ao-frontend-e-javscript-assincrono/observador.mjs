import {delay} from "./promiseUtilities.mjs";

class Observable {
    constructor(observerFunction) {
        this._observerFunction = observerFunction;
    }

    subscribe(observer) {
        return this._observerFunction(observer);
    }
}

let guestObservable = new Observable(async (observer) => {
    await delay(1000);
    observer.next("Call 1");
    await delay(1500);
    observer.next("Call 2");
    await delay(100);
    observer.error('erro!!')
    observer.complete();
})

let guestObserver = {
    next(data) {
        console.log(`guestObserver data: ${data}`);
    },
    error(err) {
        console.log(`guestObserver error: ${err}`);
    },
    complete() {
        console.log(`guestObserver completo.`);
    }
}

let guestObserver2 = {
    next(data) {
        console.log(`guestObserver2 data: ${data}`);
    },
    error(err) {
        console.log(`guestObserver2 error: ${err}`);
    },
    complete() {
        console.log(`guestObserver2 completo.`);
    }
}

guestObservable.subscribe(guestObserver);
guestObservable.subscribe(guestObserver2);
