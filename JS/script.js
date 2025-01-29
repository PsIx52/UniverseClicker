console.log("script.js загружен");

let coins = 0;
let level = 1;
let clicks = 0;
let lastClick = Date.now();
let clicksArray = [];
let vip = 0;
let progress = 0; // Initialize progress variable
let energy = 100;

document.getElementById('click-button').addEventListener('click', () => {
    lastClick = Date.now(); 
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
        notification.classList.remove('bg-green-500'); // Remove green background
        notification.classList.add('bg-red-500'); // Add red background
        
        // Show notification after changing the background color
        showNotification('Энергия закончилась!'); // Notify user about energy depletion
    }
});

setInterval(() => {
    const now = Date.now();
    if (now - lastClick > 300 && energy > 1 && energy <= 100){
        document.getElementById('Energy').textContent = energy + "/100";
        document.querySelector('.w-56.h-3 > div').style.width = energy + '%'; 
        energy += 1;
        document.getElementById('Energy').style.color = "white";
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

export function showLeaderboard() { // Export the function
    console.log("showLeaderboard function called"); // Log when the function is called
    showNotification('Таблица лидеров скоро будет доступна!');
};

export function showSettings() { // Export the function
    console.log("showSettings function called"); // Log when the function is called
    showNotification('Настройки скоро будут доступны!');
};
