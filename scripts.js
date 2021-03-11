// Variable Declarations
const container = document.getElementById('container');
const button = document.getElementById('resetButton');
const style = window.getComputedStyle(document.body);
blockColor = style.getPropertyValue("--block-color");
let divArray = ['']
let rowNumber = 100;
let rowNumberPercent = 100 / rowNumber;
let rowNumberSquared = rowNumber ** 2;

// Main Program
createGridSquares();

button.addEventListener('click', reset);

// Function Declarations
function createGridSquares() {
    for (i = 0; i < (rowNumberSquared); i++) {
        divArray[i] = document.createElement('div');
        divArray[i].classList.add('responsiveSquare');
        divArray[i].addEventListener('mouseover', colorDiv);
        divArray[i].style.cssText = `flex-basis:${rowNumberPercent}%;`;
        container.appendChild(divArray[i]);
}}

function colorDiv(e) {
    e.target.classList.add('colored');
}

function reset() {
    divArray = [''];
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    rowNumber = prompt('How many rows and columns should the sketchpad have?', 'Enter a number from 10 to 100');
    rowNumberPercent = 100 / rowNumber;
    rowNumberSquared = rowNumber ** 2;
    createGridSquares();
}

function randomColorNumber() {
   return Math.floor(Math.random()*257); 
}
