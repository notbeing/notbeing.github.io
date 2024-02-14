document.addEventListener('DOMContentLoaded', function () {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const yesButtonRect = yesButton.getBoundingClientRect();
    const backgroundVideo = document.getElementById('backgroundVideo');
    const body = document.querySelector('body');
    const startButton = document.getElementById('startButton');
    const startButtonContainer = document.getElementById('startButtonContainer');

    const VIDEO_VOLUME = 0.25;

    let isFirstHover = true;

    function isOverlapping(x, y) {
        return x < yesButtonRect.right && x + noButton.clientWidth > yesButtonRect.left &&
               y < yesButtonRect.bottom && y + noButton.clientHeight > yesButtonRect.top;
    }

    // Функция для включения видео после клика пользователя
    function enableAutoplayAndStartAnimation() {
        backgroundVideo.muted = false; // Убираем свойство muted
        backgroundVideo.volume = VIDEO_VOLUME; // Устанавливаем начальную громкость
        backgroundVideo.play() // Запускаем видео
            .catch(error => console.error('Ошибка при попытке воспроизвести видео:', error));

        body.style.animation = 'fadeEffect 2s ease-in'; // Начать анимацию затемнения
    }

    yesButton.addEventListener('click', function () {
        const video = document.getElementById('backgroundVideo');
        video.onpause = function() {
            localStorage.setItem('videoTime', video.currentTime);
        };

        window.location.href = 'start.html'; // Замените на ваш фактический URL новой страницы
    });

    noButton.addEventListener('mouseover', function () {
        let newX, newY;
        do {
            newX = Math.random() * (window.innerWidth - noButton.clientWidth);
            newY = Math.random() * (window.innerHeight - noButton.clientHeight);
        } while (isOverlapping(newX, newY));

        noButton.style.top = newY + 'px';
        noButton.style.left = newX + 'px';
        yesButton.style.top = "50%";
        yesButton.style.left = "50%";
        yesButton.style.transform = "translate(-50%, -50%)";
        if (isFirstHover) {
            yesButton.style.top = "";
            yesButton.style.left = "";
            yesButton.style.transform = "";
            isFirstHover = false; // Сброс флага после первого наведения
        } else {
            // Перемещаем кнопку Yes обратно в центр
            yesButton.style.top = "50%";
            yesButton.style.left = "50%";
            yesButton.style.transform = "translate(-50%, -50%)";
        }
    
    });    

    // document.addEventListener('click', enableAutoplay);

    body.addEventListener('animationend', function() {
        body.style.backgroundColor = 'transparent';
    });    
    

    startButton.addEventListener('click', function() {
        // Применяем анимацию fadeEffect к телу страницы
        startButtonContainer.style.animation = 'fadeOut 2s ease-in';
        
        enableAutoplayAndStartAnimation();
        setTimeout(function() {
            startButtonContainer.style.display = 'none';
        }, 2000);
    });


});

