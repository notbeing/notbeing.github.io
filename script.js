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

    // function generateNoise() {
    //     var canvas = document.getElementById('noiseCanvas');
    //     var ctx = canvas.getContext('2d');
    //     var x, y, number,
    //         opacity = 0.2; // Настройте прозрачность шума
    
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    
    //     for (x = 0; x < canvas.width; x++) {
    //         for (y = 0; y < canvas.height; y++) {
    //             number = Math.floor(Math.random() * 60);
    
    //             ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
    //             ctx.fillRect(x, y, 1, 1);
    //         }
    //     }
    // }

    yesButton.addEventListener('click', function () {
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

    // try {
    //     particlesJS("particles-js", {
    //         "particles": {
    //           "number": {
    //             "value": 355,
    //             "density": {
    //               "enable": true,
    //               "value_area": 789.1476416322727
    //             }
    //           },
    //           "color": {
    //             "value": "#ffffff"
    //           },
    //           "shape": {
    //             "type": "circle",
    //             "stroke": {
    //               "width": 0,
    //               "color": "#000000"
    //             },
    //             "polygon": {
    //               "nb_sides": 5
    //             },
    //             "image": {
    //               "src": "img/github.svg",
    //               "width": 100,
    //               "height": 100
    //             }
    //           },
    //           "opacity": {
    //             "value": 0.48927153781200905,
    //             "random": false,
    //             "anim": {
    //               "enable": true,
    //               "speed": 0.2,
    //               "opacity_min": 0,
    //               "sync": false
    //             }
    //           },
    //           "size": {
    //             "value": 2,
    //             "random": true,
    //             "anim": {
    //               "enable": true,
    //               "speed": 2,
    //               "size_min": 0,
    //               "sync": false
    //             }
    //           },
    //           "line_linked": {
    //             "enable": false,
    //             "distance": 150,
    //             "color": "#ffffff",
    //             "opacity": 0.4,
    //             "width": 1
    //           },
    //           "move": {
    //             "enable": true,
    //             "speed": 0.2,
    //             "direction": "none",
    //             "random": true,
    //             "straight": false,
    //             "out_mode": "out",
    //             "bounce": false,
    //             "attract": {
    //               "enable": false,
    //               "rotateX": 600,
    //               "rotateY": 1200
    //             }
    //           }
    //         },
    //         "interactivity": {
    //           "detect_on": "canvas",
    //           "events": {
    //             "onhover": {
    //               "enable": true,
    //               "mode": "bubble"
    //             },
    //             "onclick": {
    //               "enable": true,
    //               "mode": "push"
    //             },
    //             "resize": true
    //           },
    //           "modes": {
    //             "grab": {
    //               "distance": 400,
    //               "line_linked": {
    //                 "opacity": 1
    //               }
    //             },
    //             "bubble": {
    //               "distance": 83.91608391608392,
    //               "size": 1,
    //               "duration": 3,
    //               "opacity": 1,
    //               "speed": 3
    //             },
    //             "repulse": {
    //               "distance": 200,
    //               "duration": 0.4
    //             },
    //             "push": {
    //               "particles_nb": 4
    //             },
    //             "remove": {
    //               "particles_nb": 2
    //             }
    //           }
    //         },
    //         "retina_detect": true
    //       });     

    // } catch (error) {
    //     console.error('Ошибка при инициализации particles.js', error);
    // }
});

