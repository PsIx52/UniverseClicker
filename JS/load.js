console.log("load.js загружен");

import { setActiveButton } from './shop.js'; // Импортируем функцию

const shopButton = document.getElementById('shop-button');
if (shopButton) {
        fetch('./HTML/shop.html') // URL файла HTML, который нужно загрузить
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка: ответ не был успешным');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('shop-modal').innerHTML = data; // Вставляем HTML контент
                setActiveButton(1);

            })
            .catch(error => {
                console.error('Произошла проблема с операцией fetch:', error);
            });
}


// Обработчики для других кнопок
const friendButton = document.getElementById('friend-button');
if (friendButton) {
    friendButton.addEventListener('click', function() {
        fetch('./HTML/ref.html') // URL файла HTML, который нужно загрузить
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка: ответ не был успешным');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('modal-ref').innerHTML = data; // Вставляем HTML контент
            })
            .catch(error => {
                console.error('Произошла проблема с операцией fetch:', error);
            });
    });
}

const profileButton = document.getElementById('profile-button');
if (profileButton) {
    profileButton.addEventListener('click', function() {
        fetch('./HTML/profile.html') // URL файла HTML, который нужно загрузить
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сетевая ошибка: ответ не был успешным');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('profile-window').innerHTML = data; // Вставляем HTML контент
            })
            .catch(error => {
                console.error('Произошла проблема с операцией fetch:', error);
            });
    });
}
