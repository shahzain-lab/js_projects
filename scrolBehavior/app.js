

//date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');


//toggling navbar
navToggle.addEventListener('click', () => {

    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
});

const scrolLink = document.querySelectorAll('.scroll-link');

scrolLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const id = link.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const fixedNav = navbar.classList.contains('fixed-nav');
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const navHeight = navbar.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight

        if(navHeight > 82){
            position = position + containerHeight;
        }
        if(!fixedNav){
            position = position - navHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })

        linksContainer.style.height = 0;
    })
})