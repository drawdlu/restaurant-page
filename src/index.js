import "./styles.css";
import loadHomePage from "./scripts/home";
import loadMenuPage from "./scripts/menu";

loadHomePage();

const nav = document.querySelector("nav")
let activeTabButton = document.querySelector("nav ul li:nth-child(1) button");
activeTabButton.classList.add("active");

nav.addEventListener("click", (e) => {
    const navText = e.target.textContent

    switch (navText) {
        case "Home":
            loadPage(loadHomePage);
            break;
        case "Menu":
            loadPage(loadMenuPage);;
            break;
        case "Contact Us":
            console.log("Contact Us pressed");
            break;
    }

    changeActiveButton(e);
})

function changeActiveButton(e) {
    const elementName = e.target.tagName;

    if (elementName === "BUTTON" || elementName === "SPAN") {
        let targetButton;
        if (elementName === "BUTTON") {
            targetButton = e.target;
        } else {
            targetButton = e.target.parentElement;
        }

        activeTabButton.classList.remove("active")
        activeTabButton = targetButton
        activeTabButton.classList.add("active")
    }
}

function loadPage(page) {
    const content = document.querySelector(".content")
    content.innerHTML = "";

    page();
}