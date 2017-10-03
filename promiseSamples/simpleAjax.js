'use strict';
// what the hell is happening here?
// we want to get data from outer source (server). 
// we send http request with fetch API.
// fetch api return us a promise with data from the server.
// we subscribe to the fetch promise. 
// every data that runs throw http is json or xml, so we parse it with json().
// after that we console the data.

var foo = 100;
console.log('foo is initatied to', foo)
fetch('http://localhost:3000/value')
    .then(res => res.json())
    .then(data => {
        foo = data;
        console.log('foo after promise resolves', foo);
    })
console.log('i am still the initatied foo ' + foo)

// now, in order to have the a=a+"" done after data is fetched - use anothr THEN

// var a;
// console.log('a is initatied to', a)
// fetch('http://localhost:3000/value')
// .then(res => res.json())
// .then(data => {
//     a = data;
//     console.log('a after promise resolved',a);
// })
// .then(x => {
//     a = a + 'is amazing'
//     console.log('a + is amazing is made using then')
//     console.log(a)
// })
// here you can see that we get a vlue only after the promise resolves.
// in the console.log we can see that a still has no value.
// the promise is resolved (actully runed)
// console.log('a out of promise',a)


