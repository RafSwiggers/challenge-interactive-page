const tabs = document.getElementsByClassName("tabs");
var next = document.getElementById("volgende");
var previous = document.getElementById("vorige");
for (var i = 0; i < tabs.length; i++) {
    if (i != 0) {
        tabs[i].style.display = "none";
    }

}

function textclick() {
    console.log("yasss")
};

previous.addEventListener("click", textclick);


next.addEventListener("click", textclick);