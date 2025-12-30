import tempuraNoodles from "../images/menu/tempura-noodles.jpg";
import shrimpSalad from "../images/menu/shrimp-salad.jpg";
import gyoza from "../images/menu/gyoza.jpg";
import tempuraSushi from "../images/menu/tempura-sushi.jpg";
import sushi from "../images/menu/sushi.jpg";
import bento from "../images/menu/bento.jpg";

class MenuItem {
    constructor (name, image, description) {
        this.name = name;
        this.image = image;
        this.description = description;
    }

    name() {
        return this.name
    }

    image() {
        return this.image
    }

    description() {
        return this.description
    }
}

function createMenuObjects() {
    const menu = 
    [
        new MenuItem("Spark Soba",
                tempuraNoodles, 
                `Udon or Soba noodles served in a high-voltage
                ginger-dashi broth, topped with "voltage" tempura shrimp
                and crispy vegetable shards for a textured crunch.`),

        new MenuItem("Neon Tide Salad",
            shrimpSalad,
            `Flash-seared tiger shrimp tossed with wild greens, 
            radish curls, and a vibrant ultraviolet 
            dragonfruit-citrus dressing.`
        ),

        new MenuItem("Midnight Packet",
            gyoza,
            `Pan-seared pork and cabbage dumplings with a 
             "short-circuit" black vinegar and chili dipping 
             sauce. Crispy on the bottom, soft on the top.`
        ),

        new MenuItem("Supernova Roll",
            tempuraSushi,
            `A deep-fried, high-decibel roll featuring spicy tuna
             and cream cheese, drizzled with a glow-up unagi 
             sauce and topped with "static" tempura flakes.`
        ),

        new MenuItem("Logic Roll", 
            sushi,
            `A perfectly programmed roll of fresh Atlantic salmon 
             and avocado, topped with "byte-sized" pearls of 
             yuzu-infused caviar and a streak of spicy mayo.`
        ),
        new MenuItem("Neon Bento",
            bento,
            `The ultimate hardware kit. A multi-compartment box 
             featuring your choice of protein, "glitch" slaw, 
             three tempuras, and a bed of steamed rice.`
        )
    ]


    return menu;
}

function createWrapper() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    menuDiv.appendChild(containerDiv);

    return menuDiv;
}

function createItemWrapper() {
    const itemWrapper = document.createElement("div");
    itemWrapper.classList.add("menu-item");

    return itemWrapper;
}

function createNameDiv(name) {
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("item-name");
    nameDiv.textContent = name;

    return nameDiv;
}

function createImageDiv(imageSrc) {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image");
    const image = document.createElement("img");
    image.src = imageSrc;

    imageDiv.appendChild(image);

    return imageDiv;
}

function createDescriptionDiv(description) {
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.textContent = description;

    return descriptionDiv;
}

function createItemDiv(name, image, description) {
    const containerDiv = createItemWrapper();
    const nameDiv = createNameDiv(name);
    const imageDiv = createImageDiv(image);
    const descriptionDiv = createDescriptionDiv(description);

    containerDiv.appendChild(nameDiv);
    containerDiv.appendChild(imageDiv);
    containerDiv.appendChild(descriptionDiv);

    return containerDiv;

}

function createMenuPage() {
    const menuObjects = createMenuObjects();
    const menuPage = createWrapper();
    const container = menuPage.firstElementChild;

    for (const item of menuObjects) {
        addToMenuPage(item, container);
    }

    return menuPage;
}

function addToMenuPage(item, menuPage) {
    const itemDiv = createItemDiv(item.name, item.image, item.description);
    menuPage.appendChild(itemDiv)
}

export default function loadMenuPage() {
    const content = document.querySelector(".content");
    content.appendChild(createMenuPage());
}