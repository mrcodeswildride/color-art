let square1 = document.getElementById(`square1`)
let square2 = document.getElementById(`square2`)
let square3 = document.getElementById(`square3`)
let square4 = document.getElementById(`square4`)
let square5 = document.getElementById(`square5`)
let square6 = document.getElementById(`square6`)
let square7 = document.getElementById(`square7`)
let square8 = document.getElementById(`square8`)
let square9 = document.getElementById(`square9`)

let redButton = document.getElementById(`redButton`)
let greenButton = document.getElementById(`greenButton`)
let blueButton = document.getElementById(`blueButton`)
let colorParagraph = document.getElementById(`colorParagraph`)

let opacity25Button = document.getElementById(`opacity25Button`)
let opacity50Button = document.getElementById(`opacity50Button`)
let opacity750Button = document.getElementById(`opacity75Button`)
let opacityParagraph = document.getElementById(`opacityParagraph`)

let selectedColor
let selectedOpacity

square1.addEventListener(`click`, changeSquare)
square2.addEventListener(`click`, changeSquare)
square3.addEventListener(`click`, changeSquare)
square4.addEventListener(`click`, changeSquare)
square5.addEventListener(`click`, changeSquare)
square6.addEventListener(`click`, changeSquare)
square7.addEventListener(`click`, changeSquare)
square8.addEventListener(`click`, changeSquare)
square9.addEventListener(`click`, changeSquare)

redButton.addEventListener(`click`, selectRed)
greenButton.addEventListener(`click`, selectGreen)
blueButton.addEventListener(`click`, selectBlue)

opacity25Button.addEventListener(`click`, select25)
opacity50Button.addEventListener(`click`, select50)
opacity75Button.addEventListener(`click`, select75)

function changeSquare() {
  this.style.backgroundColor = selectedColor
  this.style.opacity = selectedOpacity
}

function selectRed() {
  selectedColor = `red`
  colorParagraph.innerHTML = `Selected color: red`
}

function selectGreen() {
  selectedColor = `green`
  colorParagraph.innerHTML = `Selected color: green`
}

function selectBlue() {
  selectedColor = `blue`
  colorParagraph.innerHTML = `Selected color: blue`
}

function select25() {
  selectedOpacity = `25%`
  opacityParagraph.innerHTML = `Selected opacity: 25%`
}

function select50() {
  selectedOpacity = `50%`
  opacityParagraph.innerHTML = `Selected opacity: 50%`
}

function select75() {
  selectedOpacity = `75%`
  opacityParagraph.innerHTML = `Selected opacity: 75%`
}
