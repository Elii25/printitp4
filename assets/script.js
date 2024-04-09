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

// Selectionner le conteneur HTML
const dotsContaire = document.querySelector('.dots')

// Parcourir le tableau des slider
for (let i= 0; i < slides.length; i++){
	//Creer un nouvel element HTML et lui ajouter une class CSS
	const newDot = document.createElement('span')
	newDot.classList.add('dot')

	// si c'est le prier, on ajoute une seconde class css
	if(i===0){
		newDot.classList.add('dot_selected')
	}
	//Ajouter l'element au conteneur
	dotsContaire.appendChild(newDot)
}