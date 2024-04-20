document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const navContainer = document.getElementById("nav-container");

    menuButton.addEventListener("click", function () {
        navContainer.classList.toggle("active");
    });
});