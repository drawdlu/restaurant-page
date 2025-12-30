function createWrapper () {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    contactDiv.appendChild(containerDiv);

    return contactDiv;
}

function createContactInfoDiv () {
    const addressElement = document.createElement("address")
    const addressDiv = createAddressDiv("77 Flux Avenue, Lower Circuit District Metro City, NY 10013 (Located sub-level, beneath the Prism Bridge)");
    const numberDiv = createDivLink("Phone (The Hotline):", "tel:5558088626", "(555) 808-UMAMI (555-808-8626)")
    const emailDiv = createDivLink("Email: ", "mailto:pulse@neonumami.io", "pulse@neonumami.io")

    addressElement.appendChild(addressDiv);
    addressElement.appendChild(numberDiv);
    addressElement.appendChild(emailDiv);

    return addressElement;
}

function createAddressDiv (address) {
    const addressSpan = createSpanText("Address: ")
    const addressDiv = document.createElement("div");

    addressDiv.appendChild(addressSpan);
    addressSpan.after(address);

    return addressDiv;
}

function createDivLink (spanText, linkValue, linkText) {
    const div = document.createElement("div");
    const span = createSpanText(spanText);
    const link = createLink(linkValue, linkText);

    div.appendChild(span);
    div.appendChild(link);

    return div;
}

function createLink (hrefValue, text) {
    const link = document.createElement("a");
    link.href = hrefValue;
    link.textContent = text;

    return link;
}

function createSpanText(text) {
    const span = document.createElement("span");
    span.textContent = text;

    return span;
}

function createContactPage () {
    const contactPage = createWrapper();
    const container = contactPage.firstElementChild;
    const address = createContactInfoDiv();
    const operatingHours = createOperatingHours();

    container.appendChild(address)
    container.appendChild(operatingHours)

    return contactPage;
}

function createOperatingHours () {
    const operatingHoursDiv = document.createElement("div");
    operatingHoursDiv.classList.add("operating-hours");
    const hoursList = createOperatingHoursList();
    const operatingHoursH3 = createH3("Operating Hours");

    operatingHoursDiv.appendChild(operatingHoursH3);
    operatingHoursDiv.appendChild(hoursList);

    return operatingHoursDiv;
}

function createH3 (text) {
    const h3 = document.createElement("h3");
    h3.textContent = text;

    return h3;
}

function createOperatingHoursList() {
    const ul = document.createElement("ul");
    const listItem1 = createListItem("Mo-Thu 17:00", "Mon – Thu: 5:00 PM – 12:00 AM");
    const listItem2 = createListItem("Fri-Sat 17:00", "Fri – Sat: 5:00 PM – 3:00 AM");
    const listItem3 = createListItem("Sun 16:00", "Sunday: 4:00 PM – 11:00 PM");

    ul.appendChild(listItem1);
    ul.appendChild(listItem2);
    ul.appendChild(listItem3);

    return ul;
}

function createListItem(datetime, text) {
    const li = document.createElement("li");
    const time = createTimeElement(datetime, text);

    li.appendChild(time);

    return li;
}

function createTimeElement(datetime, text) {
    const time = document.createElement("time");
    time.setAttribute("itemprop", "opens");
    time.setAttribute("datetime", datetime);
    time.textContent = text;

    return time;
}

export default function loadContactPage() {
    const content = document.querySelector(".content");
    content.appendChild(createContactPage());
}