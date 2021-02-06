let colors = ["blue", "green", "rgba(133,122,200)", "orange", "rgba(0,0,0,0.4)","rosybrown", "rgb(69, 175, 27)"];


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
