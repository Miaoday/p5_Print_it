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
const imageOfSlide = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');
const firstSlide = track.children[0];
const wholeSlide = slides.length;

let currentSlide = 0;

// add image to the slideimage
for (let i = 1; i< wholeSlide; i++) {
   const addImage = document.createElement('img');
   // addImage.src = element.innerHTML = `<img src="./assets/images/slideshow/${slides[i].image}">`;
   addImage.classList.add('banner-img');
   addImage.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
   addImage.alt = 'Banner Print-it';  
   // track.appendChild(addImage, firstSlide);
   track.insertBefore(addImage, tagLine);
}

// Add the dots to the track
function createDots() {
   const dotsContainer = document.querySelector('.dots'); 
   
   for (let i = 0; i < wholeSlide; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dotsContainer.appendChild(dot);
      // dot.addEventListener('click', () => {
         // updateSlide(i);
      // });
   }
}
// Calling the function createDots
createDots();
// update the image according to the currentSlideIndex 


function updateSlide(index) {  
   currentSlide = index;  
   const currentImage = slides[currentSlide].image;
   imageOfSlide.src = `./assets/images/slideshow/${currentImage}`;
   // const index = currentSlide;
   // const direction = index > currentSlide? 'right' : 'left';
   // if (direction === 'right') {
      // currentSlide = (currentSlide + 1) % wholeSlide;
   // } else if (direction === 'left') {
      // currentSlide = (currentSlide - 1 + wholeSlide) % wholeSlide;
   // }
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

// function handleClickArrow(direction) {}
const rightButton = document.querySelector('.arrow_right');
const leftButton = document.querySelector('.arrow_left');

rightButton.addEventListener('click', (e) => { 
   const nextSlide = (currentSlide + 1) % wholeSlide;
   updateSlide(nextSlide);
   console.log("clicked on the right button on the slide show");
   // when I click on the right button the slide move to the right
});

leftButton.addEventListener('click', (e) => {  
   const prevSlide = (currentSlide - 1 + wholeSlide) % wholeSlide;
   updateSlide(prevSlide);
   console.log("clicked on the left button on the slide show");
   // when I click on the left button the slide move to the left
});

