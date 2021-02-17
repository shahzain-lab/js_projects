

const container = document.querySelector('.container');
const card = document.querySelector('.card');
const title = document.querySelector('.title');
const para = document.querySelector('.para');
const img = document.querySelector('img');
const purchase = document.querySelector('.purchase');
const sizes = document.querySelector('.sizes');


//mouse move
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;

    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
    
}) 

//mouse enter
container.addEventListener('mouseenter' ,() => {
    card.style.transition = 'none';
    title.style.transform = `translateZ(100px)`;
    para.style.transform = `translateZ(70px)`;
    purchase.style.transform = `translateZ(120px)`;
    sizes.style.transform = `translateZ(100px)`;
    img.style.transform = `translateZ(70px) rotateZ(-40deg)`;
})

//mouse leave
container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    card.style.transition = 'all .4s ease';
    title.style.transform = `translateZ(0px)`;
    para.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(120px)`;
    img.style.transform = `translateZ(0px) rotateZ(0deg)`;
})