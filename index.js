/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const menuList = document.querySelector('#navbar');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Determine if the section is near the top the viewport
// For our purposes, it must lie in the top half of the screen. May have to adjust in the future as needed.
function isInViewport(element) {
    const bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 && bounding.top <= 0.5*(window.innerHeight || document.documentElement.clientHeight)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Add class 'active-section' to a section when it's near the top of the viewport
// Add class 'menu__link-active' to the active section's menu link
function getActiveSection() {
	window.addEventListener('scroll', event => {
		for (section of sections){
            const currMenuLink = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);
			if (isInViewport(section)) {
				section.classList.add('active-section');
                currMenuLink.classList.add('menu__link-active');
                /*window.location.hash = `#${section.id}`;*/
			}
			else {
				section.classList.remove('active-section');
                currMenuLink.classList.remove('menu__link-active');
			}
		}
	});
}

// Scroll to appropriate anchor ID
function scrollToSection() {
	menuList.addEventListener('click', event => {
		event.preventDefault();
		document.querySelector(event.toElement.hash).scrollIntoView({
            behavior: 'smooth'
        });
	});
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Scroll to section upon navigation link click
scrollToSection();
// Set sections as active
setTimeout(getActiveSection, 0);