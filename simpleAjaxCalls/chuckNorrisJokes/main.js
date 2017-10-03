'use-strict'
// let firstName = prompt('What is your name?');
let firstName = 'elad';
// let lastName = prompt('what is your last name?');
let lastName = 'frizi';
let apiUrl = `http://api.icndb.com/jokes/random?firstName=${firstName}&amp;lastName=${lastName}`

// console.log(apiUrl);
fetch(apiUrl)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data.value.joke)
    })


function getJoke() {
    let firstName = document.querySelector('input[name="first-name"]').value;
    let lastName = document.querySelector('input[name="last-name"]').value;
    let apiUrl = `http://api.icndb.com/jokes/random?firstName=${firstName}&amp;lastName=${lastName}`
    console.log(apiUrl)
    fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data => {
            document.querySelector('.joke').innerHTML = data.value.joke;
            console.log(data.value.joke)
        })

}