let colors = [1 ,2, 3 , 4, 5, 6 , 7, 8, 9 ,"A" , "B", "C" ,"D" ,"E", "F"];

const btn = document.querySelector('#btn');
const colrName = document.querySelector('#color');

btn.addEventListener('click', () => {
    let hexLoop = "#";

    for(let i= 0 ; i < 6; i++ ){
        hexLoop += colors[getRandomNumber()]
        console.log(i)

    }
    console.log(hexLoop)
    document.body.style.backgroundColor = hexLoop;
    colrName.textContent = hexLoop;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
