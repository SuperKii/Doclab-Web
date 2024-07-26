'use strict';

/**
 *  add event listener on multiple elements
 */

const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType,callback);
    }
}


/**
 * preloader
 * 
 * preloader will be visible until doc load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
});

/*
Mobile Navbar
*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const toggleNav = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers, "click", toggleNav);

/**
 * header & to top btn
 * 
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function (){
    if (window.scrollY > 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    }else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

window.addEventListener("scroll", activeElementOnScroll);

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementsOnScroll = function () {
    for (let i=0, len = revealElements.length; i<len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

window.addEventListener("scroll", revealElementsOnScroll);

window.addEventListener("load", revealElementsOnScroll);