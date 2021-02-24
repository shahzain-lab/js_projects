

const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear()

navToggle.addEventListener('click', () => {
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linkContainer.style.height = `${linksHeight}px`;
    }else{
        linkContainer.style.height = 0;
    }
});

//scrollEffect

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav')
    };

    if(scrollHeight > 500){
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})