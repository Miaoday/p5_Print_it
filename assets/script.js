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
console.log(slides);

// Add all images to the track
const track = document.getElementById('banner');
const tagLine = document.querySelector('p');
const firstSlide = track.children[0];
console.log(firstSlide);

for (let i = 1; i< slides.length; i++) {
   const addImage = document.createElement('img');
   addImage.classList.add('banner-img');
   addImage.src = `./assets/images/slideshow/${slides[i].image}`;
   addImage.alt = 'Banner Print-it';  
   track.appendChild(addImage, firstSlide);
   track.insertBefore(addImage, tagLine);
}


const leftButton = document.querySelector('.arrow_left');
const rightButton = document.querySelector('.arrow_right');

leftButton.addEventListener('click', (e) => {
   console.log("clicked on the left button");
   // when I click on the left button the slide move to the left

})
rightButton.addEventListener('click', (e) => {
   console.log("clicked on the right button");
   // when I click on the right button the slide move to the right

})
// get the number of slides and connect the to the dots container
// create the slides of dots

function createDots() {
   const dotsContainer = document.querySelector('.dots'); 
   dotsContainer.innerHTML = '<div class="dots"></div>';
   
   for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
   // Add the selected class to the current slide
      if (i === 0) {
         
      }
   }
}
// Appel de la fonction createDots
createDots();

let currentSlideIndex = 0;

// update the dots when I click on the dot
function updateDots() {
   
   const allDots = document.querySelectorAll('.dot')

   allDots.forEach(dot => {
      dot.classList.remove('dot_selected');
   });
   allDots[currentSlideIndex].classList.add('dot_selected');
}

updateDots();

// update the photo when I click on the dot 
function updateSlide() {
   
   const slideShow = document.querySelectorAll('.banner-image');
   

   // update the image according to the currentSlideIndex 
   slideShow.forEach((slide, index) => {
     slide.style.left = `${(index - currentSlideIndex) * 100}%`;
   });
 
   // update the tagLing text according to the currentSlideIndex
   
}

