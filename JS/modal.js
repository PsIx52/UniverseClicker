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