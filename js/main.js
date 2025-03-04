
// inserimento immagine

const pictureElement = document.querySelector('.lamp-picture');
console.log(pictureElement);
pictureElement.src = '../img/white_lamp.png';
pictureElement.alt = 'white-lamp-picture'

// inserimento bottone 

const btnElement = document.querySelector('.power-button');
console.log(btnElement);

// 

btnElement.addEventListener('click', function(){

    pictureElement.setAttribute('src', '../img/yellow_lamp.png');
    pictureElement.setAttribute('alt', 'yellow-lamp-picture');


})


