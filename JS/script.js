console.log("script.js загружен");

window.coins = 0; // Привязка монет к объекту window
window.level = 1;
window.clicks = 0;
window.lastClick = Date.now();
window.clicksArray = [];
window.vip = 0;
window.progress = 0; // Инициализация переменной прогресса
window.MaxEnergy = 100; // Максимальная энергия
window.energy = window.MaxEnergy; // Текущая энергия зависит от MaxEnergy
window.PowerClick = 1;
window.SpeedRecovery = 1;

// Функция для обновления отображения энергии
function updateEnergyDisplay() {
    document.getElementById('Energy').textContent = `${energy}/${MaxEnergy}`;
    document.querySelector('.w-56.h-3 > div').style.width = `${(energy / MaxEnergy) * 100}%`;

    if (energy > 0) {
        Energy.style.color = "white"; // Возвращаем цвет в белый
    } else {
        Energy.style.color = "red"; // Меняем цвет на красный
        showLowEnergy();
    }
}

document.getElementById('click-button').addEventListener('click', () => {
    lastClick = Date.now(); // Обновляем lastClick при клике
    if (energy > 1) {
        energy = Math.max(energy - 2, 0); // Уменьшаем энергию, но не ниже 0
        updateEnergyDisplay();

        coins += PowerClick;
        clicks++;
        document.getElementById('TotalCoins').textContent = coins;

        progress = Math.min(progress + 1, 100);
        document.querySelector('.w-32 .h-full').style.width = `${progress}%`;

        if (coins >= level * 100) {
            level++;
            progress = 0; // Сбрасываем прогресс при повышении уровня
            document.getElementById('level').textContent = `Level ${level}`;
            showNotification(`Поздравляем! Вы достигли ${level} уровня!`);
        }

        if (coins % 10 === 0) {
            vip++;
            console.log(vip);
            document.getElementById('vip').textContent = vip;
        }
    }
});

// Восстановление энергии
setInterval(() => {
    const now = Date.now();
    if (now - lastClick > 300 && energy < MaxEnergy) {
        energy = Math.min(energy + SpeedRecovery, MaxEnergy); // Восстанавливаем энергию, но не выше MaxEnergy
        updateEnergyDisplay();

        if (energy === MaxEnergy) {
            document.getElementById('Energy').style.color = "white"; // Возвращаем цвет в белый
        }
    }
}, 500);

// Функции для уведомлений
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

function showNotificationError(message) {
    const notificationError = document.getElementById('notification-error');
    const notificationErrorText = document.getElementById('notification-error-text');
    notificationErrorText.textContent = message;
    notificationError.classList.remove('hidden');
    setTimeout(() => {
        notificationError.classList.add('hidden');
    }, 3000);
}

function showLowEnergy() {
    showNotificationError('Нет энергии!');
}