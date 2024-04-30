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

//Modifier le slide au clic sur un bouton
document.addEventListener("DOMContentLoaded", function() {
	const leftArrow = document.getElementById("arrow_left");
	const rightArrow = document.getElementById("arrow_right");
	const tagLines = ["Impressions tous formats <span>en boutique et en ligne", "Tirages haute définition grand format <span>pour vos bureaux et events", "Grand choix de couleurs <span>de CMJN aux pantones", "Autocollants <span>avec découpe laser sur mesure"];
	let currentSlide = 0;
  
  
	function changeSlide(direction) {
	  if (direction === "next") {
		currentSlide = currentSlide + 1;
	  } else {
		currentSlide = currentSlide - 1;
	  }
	  const imagePath = slides[currentSlide].image;
	  const tagLine = slides[currentSlide].tagLine;
	  
	   
	  document.getElementById("slides").src = slides[direction];
	}
  
	arrow_left.addEventListener("click", function() {
	  changeSlide("prev");
	});
  
	arrow_right.addEventListener("click", function() {
	  changeSlide("next");
	});
  
	showSlide(currentSlides);
  });
  
  // Sélection des éléments du carousel
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const points = document.querySelectorAll('.carousel .point');
const text = document.querySelector('.carousel .text');

// Initialisation de l'index de l'image actuellement affichée
let currentIndex = 0;

// Fonction pour afficher l'image suivante
function showNextImage() {
    // Masquer l'image actuelle
    images[currentIndex].classList.remove('visible');
    points[currentIndex].classList.remove('selected');
    
    // Passage à l'index suivant
    currentIndex = (currentIndex + 1) % images.length;
    
    // Afficher la nouvelle image
    images[currentIndex].classList.add('visible');
    points[currentIndex].classList.add('selected');
    
    // Mettre à jour le texte en accord avec l'image montrée
    text.textContent = images[currentIndex].getAttribute('alt');
}

//mettez en place le defilement infini sur le carouse

function showPreviousImage() {

    images[currentIndex].classList.remove('visible');
    points[currentIndex].classList.remove('selected');
    
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    
    images[currentIndex].classList.add('visible');
    points[currentIndex].classList.add('selected');
    
    text.textContent = images[currentIndex].getAttribute('alt');
}


