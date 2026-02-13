// AUTHENTICATION LOGIC (Frontend-only)

// SIGNUP
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert("User already registered");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! Please login.");
        window.location.href = "login.html";
    });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.email === email && u.password === password
        );

        if (!user) {
            alert("Invalid email or password");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert(`Welcome ${user.name}!`);
        window.location.href = "dashboard.html";
    });
}

// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully");
        window.location.href = "login.html";
    });
}

// PAGE PROTECTION
function protectPage() {
    const user = localStorage.getItem("loggedInUser");
    if (!user) {
        alert("Please login to continue");
        window.location.href = "login.html";
    }
}
