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
const track = document.getElementById('banner');
const imageOfSlide = document.getElementById('carrousel-img');
const tagLine = document.querySelector('p');
const numberOfSlide = slides.length;

// la positione actuelle dans les slides(array/tableau)
let currentSlide = 0;

// Add the dots to the track
function createDots() {
   const dotsContainer = document.querySelector('.dots'); 
   for (let i = 0; i < numberOfSlide; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
   }
   // calling the function updateDots at the same time
   updateDots();
}
// Calling the function createDots
createDots();

// update the dots when I click on the dot
function updateDots() {
   const allDots = document.querySelectorAll('.dot')
   allDots.forEach(dot => {
      dot.classList.remove('dot_selected');
   });
   allDots[currentSlide].classList.add('dot_selected'); 
 }

// update the image according to the currentSlideIndex 
function updateSlide(index) {  
   currentSlide = index;  
   const currentImage = slides[currentSlide].image;
   imageOfSlide.src = `./assets/images/slideshow/${currentImage}`;
   // update the tagLine text according to the currentSlideIndex
   tagLine.innerHTML = slides[index].tagLine;
}

// clicking for moving the slide show
const rightButton = document.querySelector('.arrow_right');
const leftButton = document.querySelector('.arrow_left');

rightButton.addEventListener('click', (e) => { 
   console.log(e)
   const nextSlide = (currentSlide + 1) % numberOfSlide;
   updateSlide(nextSlide);
   updateDots();
   console.log("clicked on the right button on the slide show");
   // when I click on the right button the slide move to the right
});

leftButton.addEventListener('click', (e) => {  
   const prevSlide = (currentSlide - 1 + numberOfSlide) % numberOfSlide;
   updateSlide(prevSlide);
   updateDots();
   console.log("clicked on the left button on the slide show");
   // when I click on the left button the slide move to the left
});

