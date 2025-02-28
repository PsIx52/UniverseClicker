console.log("shop.js загружен");

const purchasedUpgrades = {}; // Move this outside to retain state

export function setActiveButton(buttonNumber) {
    console.log(`setActiveButton called with buttonNumber: ${buttonNumber}`); // Log to confirm activation
    const busters = document.getElementById('busters');
    const skins = document.getElementById('skins');
    const specials = document.getElementById('specials');

    if (busters && skins && specials) {
        // Сначала сбрасываем активные классы для всех кнопок
        busters.classList.remove('active');
        skins.classList.remove('active');
        specials.classList.remove('active');

        // Затем устанавливаем активный класс для выбранной кнопки
        switch (buttonNumber) {
            case 1:
                busters.classList.add('active');
                break;
            case 2:
                skins.classList.add('active');
                break;
            case 3:
                specials.classList.add('active');
                break;
            default:
                break;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM полностью загружен");
    showUpgrades(1); // Показываем первую вкладку по умолчанию
});

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
            console.log("Showing Modal:", modal);
            modal.classList.remove("hidden");
        }
    }
    hideAllModals();

    switch (buttonNumber) {
        case 1:
            showModal(listUpgrade1);
            setActiveButton(buttonNumber);
            break;
        case 2:
            showModal(listUpgrade2);
            setActiveButton(buttonNumber);
            break;
        case 3:
            showModal(listUpgrade3);
            setActiveButton(buttonNumber);
            break;
        default:
            break;
    }

    const buttons = document.querySelectorAll('.buy_btn');

    buttons.forEach(button => {
        const upgradeType = button.getAttribute('data-upgrade-type');
        if (purchasedUpgrades[upgradeType]) {
            button.classList.add('active'); 
        }
        button.removeEventListener('click', purchaseUpgrade); 
        button.addEventListener('click', (event) => {
            event.stopPropagation(); 
            purchaseUpgrade(button.getAttribute('data-upgrade-type'), button);
        });
    });
}

function purchaseUpgrade(upgradeType, button) {
    const upgradeCost = parseInt(button.getAttribute('data-cost'));

    if (button.classList.contains('success') && (purchasedUpgrades[upgradeType])) {
        console.warn("Upgrade already purchased.");
        return;
    }

    button.disabled = true;

    switch (upgradeType) {
        // list-upgrade1
        case 'clickUpgrade':
            console.log("норм");
            PowerClick++;
            break;
        case 'criticalClickUpgrade':
            console.log("норм");
            break;
        case 'energyGeneratorUpgrade':
            MaxEnergy = 150;
            console.log("норм");
            break;
        case 'fastRecoveryUpgrade':
            SpeedRecovery = 2;
            console.log("норм");
            break;
        case 'offlineIncomeUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        case 'autoCollectUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;

        // list-upgrade2
        case 'fireSkinUpgrade':
            // Handle type1 upgrade
            console.log("норм");
            break;
        case 'iceSkinUpgrade':
            // Handle type2 upgrade
            console.log("норм");
            break;
        case 'energySkinUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        case 'forestSkinUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        case 'goldSkinUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;

        // list-upgrade3
        case 'ChronoBoostUpgrade':
            // Handle type1 upgrade
            console.log("норм");
            break;
        case 'FrozenTimeUpgrade':
            // Handle type2 upgrade
            console.log("норм");
            break;
        case 'CubeUniverseUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        case 'BlackHoleUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        case 'LeviathanUpgrade':
            // Handle type3 upgrade
            console.log("норм");
            break;
        default:
            console.warn("Unknown upgrade type.");
            button.disabled = false; // Re-enable button if unknown type
            return;
    }

    if (window.coins >= upgradeCost) {
        window.coins -= upgradeCost; 
        document.getElementById('TotalCoins').textContent = window.coins; 
        purchasedUpgrades[upgradeType] = true; 
        button.classList.add('success'); 
        button.innerHTML = "Success!";
        return;
    } else {
        if (!button.classList.contains('error')) {
            console.warn("Not enough coins to purchase upgrade.");
            showErrorBtn("Not Cash!", button);
        }
    }

    // Re-enable button after a short delay
    setTimeout(() => {
        button.disabled = false;
    }, 1000);
}

function showErrorBtn(message, button){
    const buttonId = button.id;
    const originalHtml = button.innerHTML;
    localStorage.setItem(`originalHtml_${buttonId}`, originalHtml); // сохраняем исходный HTML в localStorage
    button.classList.add('error');
    button.innerHTML = message;
    setTimeout(()=>{
        button.classList.remove('error');
        button.innerHTML = originalHtml; // восстанавливаем исходный HTML из localStorage
    },1000)
}
