export function setActiveButton(buttonNumber) {
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
    const purchasedUpgrades = {};
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

    function purchaseUpgrade(upgradeType, button) {
        const upgradeCost = parseInt(button.getAttribute('data-cost'));

        const buttons = document.querySelectorAll('.buy_btn');
        buttons.forEach(button => {
            const buttonId = button.id;
            const originalHtml = button.innerHTML;
            localStorage.setItem(`originalHtml_${buttonId}`, originalHtml); // сохраняем исходный HTML в localStorage
        });


        window.addEventListener('load', function() {
            const buttons = document.querySelectorAll('.buy_btn');
            buttons.forEach(button => {
                const buttonId = button.id;
                const originalHtml = button.innerHTML;
                localStorage.setItem(`originalHtml_${buttonId}`, originalHtml); // сохраняем исходный HTML в localStorage
            });
        });
        
            
        if (purchasedUpgrades[upgradeType]) {
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
            function showErrorBtn(message, button){
                const buttonId = button.id;
                const originalHtml = button.innerHTML;
                localStorage.setItem(`originalHtml_${buttonId}`, originalHtml); // сохраняем исходный HTML в localStorage
                button.classList.add('error');
                button.innerHTML = message;
                console.warn("Not enough coins to purchase upgrade.");
                setTimeout(()=>{
                    button.classList.remove('error');
                    button.innerHTML = originalHtml; // восстанавливаем исходный HTML из localStorage
                },1000)
            }
            
            showErrorBtn("Not Cash!", button);
        }
    }


    const buttons = document.querySelectorAll('.buy_btn');
    buttons.forEach(button => {
        const upgradeType = button.getAttribute('data-upgrade-type');
        if (purchasedUpgrades[upgradeType]) {
            button.classList.add('active'); 
        }
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevents the event from bubbling up
            purchaseUpgrade(button.getAttribute('data-upgrade-type'), button);
        });
    });


}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    notificationText.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
};
