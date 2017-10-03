
// This is the most basic and acient way to make http request in javascript. 
// Dont worry, today we have much nicer and cleaner ways to make ajax request. 
// we create a new XMLHttpRequest object. 
// we use the xhttp.open() to describe the request we want to do.
// then we use the xhttp.send() to send our request.
// xhttp.onreadystatechange is an event. 
//the readyState its a value avivable inside the xhttp to tell us the status of the request.
// on readyState === 4 tell us that the request is finished and the respone (the data is ready)is ready.
// status === 200 tell us the status of the respone itself. 200 its ok (404 for example is page not found and thier is a lot more);
// if we got readyState === 4 and status === 200 (the request is valid)we want to do something with the data we got. 
// in this example i just want to console log the respone. but what if i wanted to do something more serius?
// like extarct only the needed data and chaned him then update my model and render the dom? 
// the will look very ugly, not nice to read and write.
// in the next chapter our new friend, the promise, going to help us. 


const xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:3000/value", true);

xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.response);
        // bunch of code line
        // bunch of code line
        // bunch of code line
        // bunch of code line
        // bunch of code line
        // bunch of code line
    }
}

xhttp.send();