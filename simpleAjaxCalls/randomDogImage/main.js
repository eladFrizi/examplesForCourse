console.log('random dog image');
var RANDOM_DOG_URL = 'https://dog.ceo/api/breeds/image/random'
function setImage() {
    fetch(RANDOM_DOG_URL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            elImgStr = '<img src="' + data.message  + '">'
            document.querySelector('.img-container').innerHTML = elImgStr
        })
}