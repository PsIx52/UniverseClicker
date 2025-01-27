let coins = 0;
let level = 1;
let clicks = 0;
let lastClick = Date.now();
let clicksArray = [];
let vip = 0;
let progress = 0; // Initialize progress variable
let energy = 100;
let energyFill = 100;

document.getElementById('click-button').addEventListener('click', () => {
    lastClick = Date.now(); // Update lastClick on user click
    if (energy > 0) {
        energy -= 2;
        document.getElementById('Energy').textContent = energy + "/100";
        document.querySelector('.w-56.h-3 > div').style.width = energy + '%'; 
        coins++;
        clicks++;
        document.getElementById('TotalCoins').textContent = coins;
        progress = Math.min(progress + 1, 100); 
        document.querySelector('.w-32 .h-full').style.width = progress + '%'; 
        
        console.log(`Current Energy: ${energy}`);

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
    if (energy <= 0) {
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
    if (now - lastClick > 1000 && energy < 100) {
        energy += 1;
        document.getElementById('Energy').style.color = "gray";
        document.getElementById('Energy').textContent = energy + "/100";
        document.querySelector('.w-56.h-3 > div').style.width = energy + '%'; 
        console.log(`Energy restored: ${energy}`);
    }
}, 1000);

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

function showLeaderboard() {
    showNotification('Таблица лидеров скоро будет доступна!');
};

function showSettings() {
    showNotification('Настройки скоро будут доступны!');
};

document.addEventListener("DOMContentLoaded", function() {
    const mainButton = document.getElementById("main-button");
    const shopButton = document.getElementById("shop-button");
    const friendButton = document.getElementById("friend-button");
    const profileButton = document.getElementById("profile-button");

    const mainWindow = document.getElementById("main");
    const shopWindow = document.getElementById("shop-modal");
    const friendsWindow = document.getElementById("modal-ref");
    const profileWindow = document.getElementById("profile-window");

    function hideAllWindows() {
        mainWindow.classList.add("hidden");
        shopWindow.classList.add("hidden");
        friendsWindow.classList.add("hidden");
        profileWindow.classList.add("hidden");
    }

    mainButton.addEventListener("click", function() {
        hideAllWindows();
        mainWindow.classList.remove("hidden");
    });

    shopButton.addEventListener("click", function() {
        hideAllWindows();
        shopWindow.classList.remove("hidden");
    });

    friendButton.addEventListener("click", function() {
        hideAllWindows();
        friendsWindow.classList.remove("hidden");
    });

    profileButton.addEventListener("click", function() {
        hideAllWindows();
        profileWindow.classList.remove("hidden");
    });
});