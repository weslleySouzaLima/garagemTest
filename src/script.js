const carPhotos = document.querySelector('.car-photos');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let scrollAmount = 0;
const scrollStep = 200; // Ajuste o valor da rolagem conforme necessário

leftButton.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    carPhotos.scroll({
        left: scrollAmount,
        behavior: 'smooth', 
    });
});

rightButton.addEventListener('click', () => {
    scrollAmount += scrollStep;
    carPhotos.scroll({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

let touchStartX = 0;

leftButton.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

leftButton.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX > touchStartX) {
        scrollAmount -= scrollStep;
        carPhotos.scroll({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }
});

rightButton.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

rightButton.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
        scrollAmount += scrollStep;
        carPhotos.scroll({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }
});
