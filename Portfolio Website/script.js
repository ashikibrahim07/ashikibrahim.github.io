window.addEventListener('scroll',handleScroll);
const backToTopButton =document.querySelector('.back-to-top');
function handleScroll (){
	const scrollPosition = window.pageYOffset;
	if (scrollPosition > 300) {
		backToTopButton.classList.add('show');
} else {
	backToTopButton.classList.remove('show');
}
}

backToTopButton.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth'});
});

function handleSubmit(event){
	event.preventDefault();


	const nameInput = document.querySelector('input[type="text"]');
	const emailInput = document.querySelector('input[type="email"]');
	const messageInput = document.querySelector('textarea');

	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	nameInput.value ='';
	emailInput.value ='';
	messageInput.value ='';
}


const navLinks = document.querySelectorAll('nav a');
for(const link of navLinks) {
	link.addEventListener('click', smoothScroll);
}
function smoothScroll(event) {
	event.preventDefault();
	const targetId = this.getAttribute('href');
	document.querySelector(targetId).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}