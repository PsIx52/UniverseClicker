window.showUpgrades = function(buttonNumber) {
    console.log("Button Number:", buttonNumber); 
    const listUpgrade1 = document.querySelector('.list-upgrade1');
    const listUpgrade2 = document.querySelector('.list-upgrade2');
    const listUpgrade3 = document.querySelector('.list-upgrade3');

    function hideAllModals() {
        if (listUpgrade1) listUpgrade1.classList.add("hidden");
        if (listUpgrade2) listUpgrade2.classList.add("hidden");
        if (listUpgrade3) listUpgrade3.classList.add("hidden");
    }

    function showModal(modal) {
        if (modal) {
            console.log("Showing Modal:", modal); // Логируем отображаемую модалку
            modal.classList.remove("hidden");
        }
    }
    
    function setActiveButton(buttonNumber) {
        const busters = document.getElementById('busters');
        const skins = document.getElementById('skins');
        const specials = document.getElementById('specials');

        if (busters && skins && specials) {
            switch (buttonNumber) {
                case 1:
                    busters.classList.add('active');
                    skins.classList.remove('active');
                    specials.classList.remove('active');
                    break;
                case 2:
                    busters.classList.remove('active');
                    skins.classList.add('active');
                    specials.classList.remove('active');
                    break;
                case 3:
                    busters.classList.remove('active');
                    skins.classList.remove('active');
                    specials.classList.add('active');
                    break;
                default:
                    break;
            }
        }
    }

    // Global object to store purchased upgrades
    const purchasedUpgrades = {};

    hideAllModals();
    setActiveButton(buttonNumber);
    switch (buttonNumber) {
        case 1:
            showModal(listUpgrade1);
            break;
        case 2:
            showModal(listUpgrade2);
            break;
        case 3:
            showModal(listUpgrade3);
            break;
        default:
            break;
    }

    // Updated function to handle upgrade purchases with console logs
    function purchaseUpgrade(upgradeType, button) {
        const upgradeCost = parseInt(button.getAttribute('data-cost'), 10);
        if (window.coins >= upgradeCost) {
            window.coins -= upgradeCost; // Deduct the cost from coins
            document.getElementById('TotalCoins').textContent = window.coins; 
            purchasedUpgrades[upgradeType] = true; // Store the purchased upgrade
            button.classList.add('active'); 
            button.textContent = "Success!"; // Change button text to "Success!"
        } else {
            console.warn("Not enough coins to purchase upgrade.");
        }

        if (purchasedUpgrades[upgradeType]) {
            return;
        }
    }

    // Check for purchased upgrades when the shop is opened
    const buttons = document.querySelectorAll('.buy_btn');
    buttons.forEach(button => {
        const upgradeType = button.getAttribute('data-upgrade-type');
        if (purchasedUpgrades[upgradeType]) {
            button.classList.add('active'); // Apply active class if already purchased
        }
    });

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            purchaseUpgrade(button.getAttribute('data-upgrade-type'), button);
        });
    });
}
