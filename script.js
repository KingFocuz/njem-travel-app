const header = document.getElementById("header");
const nav = document.getElementById("navbar");
const menu = document.getElementById('menu-icon');
const closeMenu = document.getElementById('close-menu');
const modal = document.getElementById("modal");
const main = document.getElementById("main")

menu.addEventListener("click", () => {
    console.log("You clicked the menu icon");
    menu.classList.toggle("hidden");
    modal.style.right ="0"
    nav.style.right = "0"
})

closeMenu.addEventListener("click", () => {
    console.log("You clicked the close menu");
    menu.classList.toggle("hidden");
    modal.style.right = "-100%";
    nav.style.right = "-100%"
})

window.addEventListener("load", (event)=> {
    console.log("Page is fully loaded");
    header.style.top = "0"
    main.style.left = "0"
})