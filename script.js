var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");

var noBackgroundButton = document.getElementById("noBackground");
var redButton = document.getElementById("red");
var greenButton = document.getElementById("green");
var blueButton = document.getElementById("blue");
var selectedBackgroundParagraph = document.getElementById("selectedBackground");

var opacity25Button = document.getElementById("opacity25");
var opacity50Button = document.getElementById("opacity50");
var opacity75Button = document.getElementById("opacity75");
var opacity100Button = document.getElementById("opacity100");
var selectedOpacityParagraph = document.getElementById("selectedOpacity");

var selectedBackground = "";
var selectedOpacity = "";

square1.addEventListener("click", selectSquare);
square2.addEventListener("click", selectSquare);
square3.addEventListener("click", selectSquare);
square4.addEventListener("click", selectSquare);
square5.addEventListener("click", selectSquare);
square6.addEventListener("click", selectSquare);
square7.addEventListener("click", selectSquare);
square8.addEventListener("click", selectSquare);
square9.addEventListener("click", selectSquare);

noBackgroundButton.addEventListener("click", setNoBackground);
redButton.addEventListener("click", setRed);
greenButton.addEventListener("click", setGreen);
blueButton.addEventListener("click", setBlue);

opacity25Button.addEventListener("click", setOpacity25);
opacity50Button.addEventListener("click", setOpacity50);
opacity75Button.addEventListener("click", setOpacity75);
opacity100Button.addEventListener("click", setOpacity100);

function selectSquare() {
    this.style.backgroundColor = selectedBackground;
    this.style.opacity = selectedOpacity;
}

function setNoBackground() {
    selectedBackground = "";
    selectedBackgroundParagraph.innerHTML = "Selected color: none";
}

function setRed() {
    selectedBackground = "red";
    selectedBackgroundParagraph.innerHTML = "Selected color: red";
}

function setGreen() {
    selectedBackground = "green";
    selectedBackgroundParagraph.innerHTML = "Selected color: green";
}

function setBlue() {
    selectedBackground = "blue";
    selectedBackgroundParagraph.innerHTML = "Selected color: blue";
}

function setOpacity25() {
    selectedOpacity = 0.25;
    selectedOpacityParagraph.innerHTML = "Selected opacity: 25%";
}

function setOpacity50() {
    selectedOpacity = 0.5;
    selectedOpacityParagraph.innerHTML = "Selected opacity: 50%";
}

function setOpacity75() {
    selectedOpacity = 0.75;
    selectedOpacityParagraph.innerHTML = "Selected opacity: 75%";
}

function setOpacity100() {
    selectedOpacity = 1;
    selectedOpacityParagraph.innerHTML = "Selected opacity: 100%";
}
