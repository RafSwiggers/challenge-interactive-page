const tabs = document.getElementsByClassName("tabs");
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

}

next.addEventListener('click', ext)