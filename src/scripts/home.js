function createWrapper() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    
    return homeDiv;
}

function createBanner() {
    const banner = document.createElement("div");
    banner.classList.add("header-tagline")

    const title = document.createElement("h1");
    title.textContent = "Neon Umami";

    const tagline = document.createElement("h3");
    tagline.textContent = "Bold bites for the midnight crowd."

    banner.appendChild(title);
    banner.appendChild(tagline);

    return banner;
}

function createDescription() {
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = `Where the city's pulse meets the world's deepest 
                    flavors. Neon Umami is an unapologetic fusion of street-food 
                    grit and culinary glow. We don't just serve dinner; we serve 
                    the night.`

    return description;
}

function createHomePage() {
    const home = createWrapper();
    home.appendChild(createBanner());
    home.appendChild(createDescription());

    return home;
}

export default function loadHomePage() {
    const content = document.querySelector(".content");
    content.appendChild(createHomePage());
}
