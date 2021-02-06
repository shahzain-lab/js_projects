let colors = [1 ,2, 3 , 4, 5, 6 , 7, 8, 9 ,"A" , "B", "C" ,"D" ,"E", "F"];

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const counter = document.getElementById('counter')


let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const classVal = e.currentTarget.classList;

        if(classVal.contains('decrease')){
            count--
        }
        else if(classVal.contains('increase')){
            count++
        }
        else{
            count = 0;
        };
        value.textContent = count;

        hexHash = "#";
        for(let i = 0; i < 6; i++ ){
            hexHash += colors[getColor()]
        }

        counter.style.color = hexHash
    })
});

function getColor(){
    return Math.floor(Math.random() * colors.length)
}