'use strict';

function retrieveImage(breed) {
    fetch('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then(response => response.json())
    .then(responseJson => showImage(responseJson))
    .catch(err => showError());
}

function showImage(responseJson) {
    console.log(responseJson);
    $('.results').removeClass('hidden');
    $(`<img src="${responseJson.message}" class="dogImage" alt="a very cute dog">`).appendTo('.dogPic')
};

function showError() {
    console.log('an error occurred...')
    $('.error').removeClass('hidden');
}

function formSubmit() {
    $('form').submit(event => {
        event.preventDefault();
        $('.dogPic').empty();
        $('.error').addClass('hidden');
        let dogBreed = $('.dogBreed').val().toLowerCase();
        retrieveImage(dogBreed);
    });
}

$(function() {
    console.log('Ready and waiting to fetch images of your breed!');
    formSubmit();
})