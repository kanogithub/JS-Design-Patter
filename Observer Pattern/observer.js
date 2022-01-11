// The Observer pattern is a design pattern that offers a subscription model 
// in which objects (known as 'observers') can subscribe to an event (known as a 'subject')
// and get notified when the event occurs (or when the subject sends a signal). 

// Useful to create event handlers

class Observer {
    constructor() {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubcribe(removeFn) {
        this.observers = this.observers.filter( fn => fn !== removeFn )
    }

    fire() {
        this.observers.forEach(fn => fn.call())
    }

    showList() {
        console.log(this.observers)
    }
}

// using
const observer = new Observer()

const fn1 = function(){
    console.log('Observer 1 Fires')
}
const fn2 = function(){
    console.log('Observer 2 Fires')
}
const fn3 = function(){
    console.log('Observer 3 Fires')
}

observer.subscribe(fn1)
observer.subscribe(fn2)
observer.subscribe(fn3)

observer.unsubcribe(fn2)

observer.fire()