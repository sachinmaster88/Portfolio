// Simple welcome message

console.log("Portfolio website loaded successfully!");

// Update footer year automatically

const footerText = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} Your Name. All Rights Reserved.`;
