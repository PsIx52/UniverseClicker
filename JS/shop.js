document.addEventListener("DOMContentLoaded", function() {

    const shop_button = document.getElementById('shop-button');
    const busters = document.getElementById('busters');
    const skins = document.getElementById('skins');
    const specials = document.getElementById('specials');
    
    const listUpgrade1 = document.getElementById("list-upgrade1");
    const listUpgrade2 = document.getElementById("list-upgrade2");
    const listUpgrade3 = document.getElementById("list-upgrade3");

    function hideAllModals() {
        listUpgrade1.classList.add("hidden");
        listUpgrade2.classList.add("hidden");
        listUpgrade3.classList.add("hidden");
    }

    shop_button.addEventListener("click", function() {
        hideAllModals();
        listUpgrade1.classList.remove("hidden");
    });

    busters.addEventListener("click", function() {
        hideAllModals();
        listUpgrade1.classList.remove("hidden");
    });

    skins.addEventListener("click", function() {
        hideAllModals();
        listUpgrade2.classList.remove("hidden");
    });

    specials.addEventListener("click", function() {
        hideAllModals();
        listUpgrade3.classList.remove("hidden");
    });
});
