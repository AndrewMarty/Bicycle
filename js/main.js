$(document).ready(function(){
	const header = document.querySelector('.header');
	const burger = document.querySelector('.burger');
	const navigation = document.querySelector('.header__navigation');
	window.addEventListener('scroll', function() {
		if (window.pageYOffset > header.clientHeight) {
			header.classList.add('header_fixed');
		}
		else {
			header.classList.remove('header_fixed');
		}
	})
	burger.addEventListener('click',function(){
		burger.classList.toggle('burger_active');
		navigation.classList.toggle('header__navigation_active');
		if (navigation.classList.contains('header__navigation_active')) {
			document.body.classList.add('lock');
		}
		else {
			document.body.classList.remove('lock');
		}
	})
	const links = document.querySelectorAll('.link');
	links.forEach(function(element,index){
		element.addEventListener('click',function(e){
		e.preventDefault();
		burger.classList.remove('burger_active');
		navigation.classList.remove('header__navigation_active');
		document.body.classList.remove('lock');
		const href = element.getAttribute('href');
		const to = document.getElementById(href);
		to.scrollIntoView({ behavior: "smooth" });
		});
	})
	$('.slider').slick({ arrows: false, dots: true });
})