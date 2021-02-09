// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<JS>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const toggleBtn = document.querySelector('.sidebar-toggle');
const links = document.querySelector('.links');


toggleBtn.addEventListener('click', () => {
    if(links.classList.contains('show-sidebar')){
        links.classList.remove('show-sidebar')
        console.log(links)
    }
    else{
        links.classList.add('show-sidebar')
        console.log(links)
    }
})