const wrapper = document.querySelector('.galleryTrack');
const items = document.querySelectorAll('.galleryItem');
let index = 0;

document.getElementById('nextButton').addEventListener('click', () => {
    index = (index + 1) % items.length;
    wrapper.style.transform = `translateX(-${index * 530}px)`;
});

document.getElementById('prevButton').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    wrapper.style.transform = `translateX(-${index * 530}px)`;
});