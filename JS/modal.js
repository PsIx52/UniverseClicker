export const shopButton = document.getElementById("shop-button");

document.addEventListener("DOMContentLoaded", function() {
    const mainButton = document.getElementById("main-button");
    const friendButton = document.getElementById("friend-button");
    const profileButton = document.getElementById("profile-button");

    const mainIcon = document.getElementById("mainIcon");
    const shopIcon = document.getElementById("shopIcon");
    const friendIcon = document.getElementById("friendIcon");
    const profileIcon = document.getElementById("profileIcon");

    const mainWindow = document.getElementById("main");
    const shopWindow = document.getElementById("shop-modal");
    const friendsWindow = document.getElementById("modal-ref");
    const profileWindow = document.getElementById("profile-window");

    function hideAllWindows() {
        mainWindow.classList.add("hidden");
        shopWindow.classList.add("hidden");
        friendsWindow.classList.add("hidden");
        profileWindow.classList.add("hidden");

        mainIcon.style.color = "gray"; 
        shopIcon.style.color = "gray"; 
        friendIcon.style.color = "gray"; 
        profileIcon.style.color = "gray"; 
    }

    mainButton.addEventListener("click", function() {
        hideAllWindows();
        mainIcon.style.color = "#e89b00"; 
        mainWindow.classList.remove("hidden");
    });

    shopButton.addEventListener("click", function() {
        console.log('Shop button clicked'); 
        hideAllWindows(); 
        shopIcon.style.color = "#e89b00"; 
        shopWindow.classList.remove("hidden"); 
    });

    friendButton.addEventListener("click", function() {
        hideAllWindows();
        friendIcon.style.color = "#e89b00"; 
        friendsWindow.classList.remove("hidden");
    });

    profileButton.addEventListener("click", function() {
        hideAllWindows();
        profileIcon.style.color = "#e89b00"; 
        profileWindow.classList.remove("hidden");
    });
});
