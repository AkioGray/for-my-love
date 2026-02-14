const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const backBtn = document.getElementById('backBtn');
const retryBtn = document.getElementById('retryBtn');

const mainScreen = document.getElementById('mainScreen');
const successScreen = document.getElementById('successScreen');
const sadScreen = document.getElementById('sadScreen');

// Получаем все фотки (их теперь 25)
const photos = document.querySelectorAll('.scattered-photo');

// Функция разброса
function scatterPhotos() {
    photos.forEach(photo => {
        // Размеры экрана
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Генерируем случайные координаты
        // Используем random, чтобы фото могли быть по всему экрану
        // Отнимаем 150px от ширины/высоты, чтобы край фото не обрезался
        const randomX = Math.random() * (w - 150);
        const randomY = Math.random() * (h - 150);
        
        // Случайный угол поворота от -35 до 35 градусов
        const randomRotate = (Math.random() * 70) - 35; 

        // Применяем стили
        photo.style.left = randomX + 'px';
        photo.style.top = randomY + 'px';
        photo.style.transform = `rotate(${randomRotate}deg)`;
    });
}

// Движение кнопки "Нет"
function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = 'fixed'; 
    noBtn.style.left = Math.max(10, randomX) + 'px';
    noBtn.style.top = Math.max(10, randomY) + 'px';
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

// Клик "Да"
yesBtn.addEventListener('click', () => {
    mainScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    
    // Запускаем разброс фоток с небольшой задержкой, чтобы браузер успел отрисовать блок
    setTimeout(scatterPhotos, 50); 
});

// Клик "Я передумала"
backBtn.addEventListener('click', () => {
    successScreen.classList.add('hidden');
    sadScreen.classList.remove('hidden');
});

// Клик "Я пошутила"
retryBtn.addEventListener('click', () => {
    sadScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
});