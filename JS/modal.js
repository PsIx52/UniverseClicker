document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("shop-modal");
    const shop_button = document.getElementById("shop-button");
    const main = document.getElementById("main");
    const main_button = document.getElementById("main-button");

    function openModal() {
        main.classList.add('hidden');
        modal.classList.remove('hidden');
    }

    function closeModal() {
        modal.classList.add("hidden");
        main.classList.remove('hidden');
    };

    shop_button.onclick = openModal;
    main_button.onclick = closeModal;
});
