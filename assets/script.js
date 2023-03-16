function updateBanner(slides, currentSlide, bannerElements) {
	const slide = slides[currentSlide];
	const dots = Array.from(document.querySelectorAll('.dots .dot'));
	
	for (let i = 0; i < dots.length; i += 1) {
		if (i !== currentSlide) dots[i].classList.remove('dot_selected');
		else dots[i].classList.add('dot_selected');
	}
	
	if (slide) {
		bannerElements.img.src = `${imageDirectory}/${slide.image}`;
		bannerElements.tagLine.innerHTML = slide.tagLine;
	}
}

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

const imageDirectory = './assets/images/slideshow';
const arrowLeft = document.querySelector('.arrow.arrow_left');
const arrowRight = document.querySelector('.arrow.arrow_right');

const bannerElements = {
	img : document.querySelector('.banner-img'),
	tagLine : document.querySelector('#banner p')
}
const dots = document.querySelector('.dots');

let currentSlide = 0;


for (let i = 0; i < slides.length; i += 1) {
	const dot = document.createElement('dit');
	dot.classList.add('dot');
	if (i === currentSlide) {
		dot.classList.add('dot_selected');
	}
	dots.appendChild(dot);
}

arrowLeft.addEventListener('click', () => {
	currentSlide = currentSlide -1 >= 0 ? currentSlide - 1 : slides.length - 1;
	updateBanner(slides, currentSlide, bannerElements);
});

arrowRight.addEventListener('click', () => {
	currentSlide = currentSlide + 1 <= slides.length - 1 ? currentSlide + 1 : 0;
	updateBanner(slides, currentSlide, bannerElements);
});
