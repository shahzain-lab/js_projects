

const video = document.querySelector('.video-container');
const slidingBtn = document.querySelector('.switch-btn');

slidingBtn.addEventListener('click', () => {
  if(!slidingBtn.classList.contains('slide')){
      slidingBtn.classList.add('slide');
      video.pause();
  }else{
      slidingBtn.classList.remove('slide')
      video.play();
  }
});

//preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})