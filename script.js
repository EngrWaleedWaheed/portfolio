const roles = [
    "Network Security Engineer",
    "Cybersecurity Enthusiast",
    "Telecommunication Engineer",
    "Machine Learning Researcher"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex > currentRole.length) {
        speed = 1500;
        isDeleting = true;
    }

    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// =========================
// Scroll Reveal
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 100){
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// ==========================
// Dark Mode
// ==========================

const themeButton = document.getElementById("theme-toggle");

// Check saved theme when page loads
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";

}else{

    themeButton.textContent = "🌙";

}

// Toggle theme on click
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeButton.textContent = "☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeButton.textContent = "🌙";

        localStorage.setItem("theme","light");

    }

});
const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

});