const container = document.getElementById('container');
const divArray = ['']
const button = document.getElementById('resetButton');
let rowNumber = 0;


for (i = 0; i < (10000); i++) {
    divArray[i] = document.createElement('div');
    divArray[i].classList.add('responsiveSquare');
    container.appendChild(divArray[i]);
}

divArray.forEach(div => div.addEventListener('mouseover', colorDiv));

button.addEventListener('click', reset);

function colorDiv(e) {
    e.target.classList.add('colored');
}

function reset() {
    divArray.forEach(div => div.classList.remove('colored'));
    rowNumber = prompt('How many rows and columns should the sketchpad have?', '10 to 100 is acceptable.');
    console.log(rowNumber);
}
