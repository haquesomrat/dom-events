function makeViolet() {
    document.body.style.backgroundColor = 'violet';
}
const blueButton = document.getElementById('blue-btn');
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
const greenButton = document.getElementById('green-btn');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

const goldenRodButton = document.getElementById("golden-rod-btn");
goldenRodButton.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}


const chocolateButton = document.getElementById("chocolate-btn");
chocolateButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'chocolate';
})


document.getElementById('khaki-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'khaki';
})