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
	const slides = document.querySelectorAll(".slides");
	const prevBtn = document.getElementById("prevBtn");
	const nextBtn = document.getElementById("nextBtn");
	const tagLines = ["Impressions tous formats <span>en boutique et en ligne", "Tirages haute définition grand format <span>pour vos bureaux et events", "Grand choix de couleurs <span>de CMJN aux pantones", "Autocollants <span>avec découpe laser sur mesure"];
	let currentSlide = 0;
  
	function showSlide(index) {
	  slides.forEach((slide, i) => {
		if (i === index) {
		  slide.style.display = "block";
		} else {
		  slide.style.display = "none";
		}
	  });
	}
  
	function changeSlide(direction) {
	  if (direction === "next") {
		currentSlide = (currentSlide + 1) % slides.length;
	  } else {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	  }
	  const imagePath = "image" + (currentSlide + 1) + ".jpg"; // Construire le chemin de la nouvelle image
	  const tagLine = tagLines[currentSlide];
	  const currentImage = slides[currentSlide].querySelector("img");
	  const tagLineElement = slides[currentSlide].querySelector("p");
	  currentImage.src = imagePath; // Changer l'image
	  tagLineElement.innerHTML = tagLine; // Insérer le texte
	  showSlide(currentSlide);
	}
  
	prevBtn.addEventListener("click", function() {
	  changeSlide("prev");
	});
  
	nextBtn.addEventListener("click", function() {
	  changeSlide("next");
	});
  
	showSlide(currentSlide);
  });
  