const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.getElementById('arrow_left');
const rightArrow = document.getElementById('arrow_right');


leftArrow.addEventListener('click', function(event) {
	console.log('Clic sur la flèche gauche');
	console.log(event);
});


rightArrow.addEventListener('click', function(event) {
	console.log('Clic sur la flèche droite');
	console.log(event);
});