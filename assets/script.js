const track = document.querySelector('.banner-img');
const slideShow = Array.from(track.children);
console.log(slideShow); 
const leftButton = document.querySelector('.arrow_left');
const rightButton = document.querySelector('.arrow_right');
const dotsBar = document.querySelector('.dots');
const dots= Array.from(dotsBar.children);
console.log(dots);
const slideWidth = slideShow[0].getBoundingClientRect().width;
//const slideSize = slideShow[0].getBoundingClientRect();
//const slideWidth = slideSize.width;
// arrange the width of each slide
// arrange the slides next to the other slide
// slideShow[0].style.left = slideWidth * 0 + 'px';
// slideShow[1].style.left = slideWidth * 1 + 'px';
// slideShow[2].style.left = slideWidth * 2 + 'px';
// slideShow[3].style.left = slideWidth * 3 + 'px';
const slideShowPosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
};
slideShow.forEach(slideShowPosition);
// when I click on the left button the slide move to the left
// when I click on the right button the slide move to the right
rightButton.addEventListener('click', e => {
	// move the slide to the right
	const currentSlide = track.querySelector('.current_slide');
	// continue move to the next slide if we clicke
	const nextSlide = currentSlide.nextElementSibling;
	const slideToLeft = nextSlide.style.left;
	track.style.transform = 'translate(-' + slideToLeft +')';
	// track.style.transform = 'translat'('-' + 'slideToLeft');
	currentSlide.classList.remove('current_slide');
	nextSlide.classList.add('current_slide');
})

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
