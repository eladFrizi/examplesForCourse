
// lets see how the promise works.

// asyncFunc is a function that returns a new promise.
// the promise resolves only after 3 secs.

function asyncFunc() {
    return new Promise((resolve, reject) => {
        console.log('===========================Promise Creation==========================================')
        console.log('Time of Promise creation: ', Date.now());
        console.log('===========================Promise Creation==========================================')
        console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
        setTimeout(() => {
            console.log('===========================Promise resolve() execute==========================================')
            console.log('the time that we resolve the prmise', Date.now())
            resolve({ value: 'promise resolved' })
            console.log('===========================Promise resolve() execute==========================================')
            console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')            
        }, 3000)
    })
}
var prm = asyncFunc();

//here we can see that asyncRes is now a promise is not resolved yet
console.log('==========================GLOBAL - written before THEN=================================')
console.log('our promise is not resolved yet')
console.log(prm);
console.log('==========================GLOBAL - written before THEN=================================')
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')




prm.then(data => {
    console.log('===============================prm.then()======================================')
    console.log('---------------------------------------------------------------------')
    console.log('the time that the THEN func  happen', Date.now());
    console.log('THEN gives us acsses to the value we passed in the resolve() via the parameter')
    console.log('data:', data)
    console.log('---------------------------------------------------------------------')
    console.log('this is how our promise "prm" looks right now')
    console.log('Notice the structure of the promise')
    console.log(prm)
    console.log('The promise carries in its belly the promise status and the value we resolved')
    console.log('Pay attention to the status. outside THEN its the status value is pendind')
    console.log('and the value is undifiend.')
    console.log('Here inside the THEN the status is resolved and the value is what we passed.')
    console.log('ONLY after the promise got resolve THEN going to execute.')
    console.log('In this case we resolved the promise after 3 seconds(look at the setTimeout)')
    console.log('In those 3 secs until we resolved the promise JS continued to run.')
    console.log('---------------------------------------------------------------------')
    console.log('===============================prm.then()======================================')
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')    
    
})
console.log('==========================GLOBAL - written after THEN=================================')
console.log('even that this line written after THEN they executed before the THEN')
console.log('our promise is still pending')
console.log(prm)
console.log('==========================GLOBAL - written after THEN=================================')
