console.log("script.js загружен");

window.coins = 0; // Attach coins to the window object
let level = 1;
let clicks = 0;
let lastClick = Date.now();
let clicksArray = [];
let vip = 0;
let progress = 0; // Initialize progress variable
let energy = 100;

document.getElementById('click-button').addEventListener('click', () => {
    lastClick = Date.now(); // Update lastClick on user click
    if (energy > 1) {
        energy -= 2;
        document.getElementById('Energy').textContent = energy + "/100";
        document.querySelector('.w-56.h-3 > div').style.width = energy + '%'; 
        coins++;
        clicks++;
        document.getElementById('TotalCoins').textContent = coins;
        document.addEventListener("DOMContentLoaded", () => {
            const coinsElement = document.getElementById('CoinsForToday');
            if (coinsElement) {
                coinsElement.textContent = coins;
            }
            console.log("Coins:", coins);
            console.log("CoinsForToday Element:", document.getElementById('CoinsForToday'));
        });
        
        progress = Math.min(progress + 1, 100); 
        document.querySelector('.w-32 .h-full').style.width = progress + '%'; 

        if (coins >= level * 100) {
            level++;
            progress = 0; // Reset progress when leveling up
            document.getElementById('level').textContent = `Level ${level}`;
            showNotification(`Поздравляем! Вы достигли ${level} уровня!`);
        }

        if (coins % 10 === 0) {
            vip++;
            console.log(vip);
            document.getElementById('vip').textContent = vip; // Update to the correct ID
        }
    } 
    if (energy <= 1) {
        document.getElementById('Energy').textContent = "0/100";
        document.getElementById('Energy').style.color = "red"; // Change color to red
        
        // Change notification background to red
        const notification = document.getElementById('notification');
        
        if (notification) {
            console.log('Текущий цвет фона:', notification.style.backgroundColor); // Проверяем текущий цвет
            notification.style.backgroundColor = ' '; 
            notification.style.backgroundColor = 'red'; // Меняем цвет фона на красный
            console.log('Новый цвет фона:', notification.style.backgroundColor); // Проверяем новый цвет
        } else {
            console.error('Элемент notification не найден');
        }
        
        // Show notification after changing the background color
        showNotification('Энергия закончилась!'); // Notify user about energy depletion
    }
});

setInterval(() => {
    const now = Date.now();
    if (now - lastClick > 300 && (energy > 0 || energy === 0)) {
        if (energy < 100) {
            document.getElementById('Energy').textContent = energy + "/100";
            energy += 1;
            document.querySelector('.w-56.h-3 > div').style.width = energy + '%';
            document.getElementById('Energy').style.color = "white";
        }
        if (energy == 100) {
            document.getElementById('Energy').textContent = "100/100";
        }
    }
}, 500);

const now = Date.now();
clicksArray.push(now);
clicksArray = clicksArray.filter(click => now - click < 1000);

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
};

document.getElementById('leaderboard-button').addEventListener('click', showLeaderboard);
document.getElementById('settings-button').addEventListener('click', showSettings);

export function showLeaderboard() { // Export the function
    console.log("showLeaderboard function called"); // Log when the function is called
    showNotification('Таблица лидеров скоро будет доступна!');
};

export function showSettings() { // Export the function
    console.log("showSettings function called"); // Log when the function is called
    showNotification('Настройки скоро будут доступны!');
};
