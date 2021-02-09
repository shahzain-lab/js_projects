
const modalBtn = document.querySelector('.modal-btn');
const showModal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
    showModal.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', () => {
    showModal.classList.remove('open-modal')
})