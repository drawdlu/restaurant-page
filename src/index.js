import "./styles.css";
import loadHomePage from "./scripts/home";

loadHomePage();

const nav = document.querySelector("nav")
const activeTabButton = document.querySelector("nav ul li:nth-child(1) button");
activeTabButton.classList.add("active");

nav.addEventListener("click", (e) => {
    const navText = e.target.textContent

    switch (navText) {
        case "Home":
            loadPage(loadHomePage);
            break;
        case "Menu":
            console.log("Menu pressed");
            break;
        case "Contact Us":
            console.log("Contact Us pressed");
            break;
    }
})

function loadPage(page) {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    page();
}