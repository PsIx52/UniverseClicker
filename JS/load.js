document.getElementById('shop-button').addEventListener('click', function() {
    fetch('./HTML/shop.html') // URL of the HTML file you want to load
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('shop-modal').innerHTML = data; // Insert the HTML content
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

document.getElementById('friend-button').addEventListener('click', function() {
    fetch('./HTML/ref.html') // URL of the HTML file you want to load
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('modal-ref').innerHTML = data; // Insert the HTML content
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

document.getElementById('profile-button').addEventListener('click', function() {
    fetch('./HTML/profile.html') // URL of the HTML file you want to load
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('profile-window').innerHTML = data; // Insert the HTML content
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});