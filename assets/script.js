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
// la positione actuelle d slides(array/tableau)
let currentSlide = 0;

// add image to the slides
function addImage() {
   for (let i = 0; i < numberOfSlide; i++) {
   const imageElement = track.appendChild(document.createElement('img'));
   imageElement.classList.add('banner-img');
   imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
   imageElement.alt = 'Banner Print-it';  
   track.insertBefore (imageElement, track.firstChild);
}
}
// calling the function addImage
addImage();

// Add the dots to the track
function createDots() {
   const dotsContainer = document.querySelector('.dots'); 
   
   for (let i = 0; i < numberOfSlide; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
   }
}
// Calling the function createDots
createDots();

// update the image according to the currentSlideIndex 
function updateSlide(index) {  
   currentSlide = index;  
   const currentImage = slides[currentSlide].image;
   imageOfSlide.src = `./assets/images/slideshow/${currentImage}`;
   imageOfSlide.classList.add('banner-img');
   imageOfSlide.alt = 'Banner Print-it';
   updateDots();
   updateTagLine(index);
}

// update the dots when I click on the dot
function updateDots() {
   const allDots = document.querySelectorAll('.dot')
 
    allDots.forEach(dot => {
       dot.classList.remove('dot_selected');
    });
    allDots[currentSlide].classList.add('dot_selected');

 }

 // update the tagLing text according to the currentSlideIndex
function updateTagLine (index) {
   tagLine.innerHTML = slides[index].tagLine;
}

// clicking for moving the slide show
const rightButton = document.querySelector('.arrow_right');
const leftButton = document.querySelector('.arrow_left');

rightButton.addEventListener('click', (e) => { 
   const nextSlide = (currentSlide + 1) % numberOfSlide;
   updateSlide(nextSlide);
   console.log("clicked on the right button on the slide show");
   // when I click on the right button the slide move to the right
});

leftButton.addEventListener('click', (e) => {  
   const prevSlide = (currentSlide - 1 + numberOfSlide) % numberOfSlide;
   updateSlide(prevSlide);
   console.log("clicked on the left button on the slide show");
   // when I click on the left button the slide move to the left
});

