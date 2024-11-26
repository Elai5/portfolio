// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle 'active' class
});

// Test Section Toggle
const btn = document.getElementById("btn");
const cancel = document.getElementById("cancel");
