document.addEventListener("DOMContentLoaded", function() {
    const ref_modal = document.getElementById("modal-ref");
    const friend_button = document.getElementById("friend-button");
    const main1 = document.getElementById("main");
    const main1_button = document.getElementById("main-button");

    function openModal() {
        main1.classList.add('hidden');
        ref_modal.classList.remove('hidden');
    }

    function closeModal() {
        ref_modal.classList.add("hidden");
        main1.classList.remove('hidden');
    };

    friend_button.onclick = openModal;
    main1_button.onclick = closeModal;
});
