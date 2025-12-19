import "./styles.css";
import loadHomePage from "./scripts/home";

loadHomePage();

const nav = document.querySelector("nav")

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