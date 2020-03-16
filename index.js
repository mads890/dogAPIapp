'use strict';

function retrieveImages(num) {
    fetch('https://dog.ceo/api/breeds/image/random/' + num)
    .then(response => response.json())
    .then(responseJson => showImages(responseJson))
    .catch(err => showError());
}

function showImages(responseJson) {
    console.log(responseJson);
    $('.results').removeClass('hidden');
    responseJson.message.forEach(function(index) {
        $(`<img src="${index}" class="dogImage" alt="a very cute dog">`).appendTo('.dogPics')
    });
}

function showError() {
    console.log('an error occurred...')
    $('.error').removeClass('hidden');
}

function formSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dogPics').empty();
        $('.error').addClass('hidden');
        let numDogs = $('.dogNum').val();
        retrieveImages(numDogs);
    });
}

$(function() {
    console.log('Ready and waiting to fetch dog images!');
    formSubmit();
})