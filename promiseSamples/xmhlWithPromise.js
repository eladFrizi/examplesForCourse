// now we going the to wrap the http request with promise. 
// go check the promiseWithoutServer.js before and remind yourself all thing we mentioned thier.


var xhttpPrm = new Promise((resolve, reject) => {
    // create new XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
    // spesify the request we want to made.
    xhttp.open('GET', "http://localhost:3000/value");
    
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // in this point we got the data we want to use. 
            // we going to resolve this (pass is trhow the promise)
            // after this point the then function that subscribe to this promise is going to run
            // with the data we pass the resolve trhow to argument.
            resolve(this.response);
        }
    }
    // shot the request
    xhttp.send()
})

// here we subscribe to the xhttppromise.
// the res is what we passed to the resolve(check in line 17    )
xhttpPrm.then(res => console.log(res));

//now look at the simpleAjax.js,
// one of the thing that fetch does (and another ajax libraries like axios and jquery)
// is to wrap for you the XMLHttpRequest with promise. 

