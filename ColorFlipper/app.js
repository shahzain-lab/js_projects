let colors = ["#ff0000", "green", "rgba(133,122,200)", "#606060", "yellow"];


const btn = document.getElementById('btn');
const colrName = document.getElementById('color');

btn.addEventListener('click', () => {

    let randomNumber = colors[getRandomNumber()]
    document.body.style.backgroundColor = randomNumber;
    colrName.textContent = randomNumber
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
