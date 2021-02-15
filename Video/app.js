

const video = document.querySelector('.video-container');
const slidingBtn = document.querySelector('.switch-btn');

slidingBtn.addEventListener('click', () => {
    if(switched.classList.contains('switch')){
        switched.classList.add('slide');
        video.pause();
    }
    
})