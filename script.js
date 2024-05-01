function validateLogin(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Ganti dengan validasi yang sesuai, ini hanya contoh sederhana
    if (username === "admin" && password === "password") {
        showMessage("success", "Welcome, " + username + "!");
    } else {
        showMessage("error", "Incorrect username or password");
    }
}

function showMessage(type, message) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = type;
    messageDiv.classList.remove("hidden");

    setTimeout(function() {
        messageDiv.classList.add("hidden");
    }, 3000); // Pesan akan hilang setelah 3 detik
}
