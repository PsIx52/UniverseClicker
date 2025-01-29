window.showUpgrades = function(buttonNumber) {
    console.log("Button Number:", buttonNumber); 
    const listUpgrade1 = document.querySelectorAll('.list-upgrade1')[0];
    const listUpgrade2 = document.querySelectorAll('.list-upgrade2')[0];
    const listUpgrade3 = document.querySelectorAll('.list-upgrade3')[0];

    function hideAllModals() {
        if (listUpgrade1) listUpgrade1.classList.add("hidden");
        if (listUpgrade2) listUpgrade2.classList.add("hidden");
        if (listUpgrade3) listUpgrade3.classList.add("hidden");
    }

    function showModal(modal) {
        if (modal) {
            console.log("Showing Modal:", modal); // Log the modal being shown
            modal.classList.remove("hidden");
        }
    }

    hideAllModals();

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
}

document.addEventListener("DOMContentLoaded", function() {
    const shop_button = document.getElementById('shop-button');
    const listUpgrade1 = document.getElementById("list-upgrade1");
    const busters = document.getElementById('busters');
    const skins = document.getElementById('skins');
    const specials = document.getElementById('specials');

    shop_button.addEventListener("click", function() {
        if (listUpgrade1) listUpgrade1.classList.remove("hidden");
    });

    if (busters) {
        busters.addEventListener("click", function() {
            window.showUpgrades(1);
        });
    }

    if (skins) {
        skins.addEventListener("click", function() {
            window.showUpgrades(2);
        });
    }

    if (specials) {
        specials.addEventListener("click", function() {
            window.showUpgrades(3);
        });
    }
});
