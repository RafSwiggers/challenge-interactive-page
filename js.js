const buttons = document.getElementsByClassName("button");
const tabs = document.getElementsByClassName("tabs");
const formulier = document.getElementById("formulier");
const programma = document.getElementById("programma");
const lokatie = document.getElementById("lokatie");
const slides = document.getElementsByTagName('img');
var next = document.getElementById("volgende");
var previous = document.getElementById("vorige");
var images = ["foto1.jpeg", "foto2.jpeg", "foto3.jpeg"];
slides[0].src = images[0];
var slideindex = 0;
for (var i = 0; i < tabs.length; i++) {
    if (i != 0) {
        tabs[i].style.display = "none";
    }

};

function nextSlide() {
    if (slideindex < images.length - 1) {
        slideindex++;
        slides[0].src = images[slideindex];
    } else {
        slideindex = 0;
        slides[0].src = images[slideindex]
    }
};

function prevSlide() {
    if (slideindex === 0) {
        slideindex = images.length - 1;
        slides[0].src = images[slideindex];
    } else {
        slideindex--;
        slides[0].src = images[slideindex]
    }
};


next.addEventListener('click', nextSlide);
previous.addEventListener('click', prevSlide);