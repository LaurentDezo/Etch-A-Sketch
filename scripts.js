const container = document.getElementById('container');
const divArray = ['']


for (i = 0; i < (10000); i++) {
    divArray[i] = document.createElement('div');
    divArray[i].classList.add('responsiveSquare');
    container.appendChild(divArray[i]);
}

divArray.forEach(div => div.addEventListener('mouseover', colorDiv));

function colorDiv(e) {
    e.target.classList.add('colored');
}
