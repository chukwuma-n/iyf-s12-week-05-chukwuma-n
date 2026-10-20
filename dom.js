console.log("JavaScript is running!");

// ============================================
// TASK 9.1: SELECTING ELEMENTS
// ============================================

console.log("Task 9.1: Selecting Elements");

const header = document.getElementById("main-header");
console.log("Header:", header);

const contents = document.getElementsByClassName("content");
console.log("Content paragraphs:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("All paragraphs:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("First link:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("All navigation links:", allLinks);

const heading = document.querySelector("h1");
console.log("H1 heading:", heading);

const contactForm = document.querySelector("#contact-form");
console.log("Contact form:", contactForm);

const emailInput = document.querySelector("#email");
console.log("Email input:", emailInput);

const navItems = document.querySelectorAll(".nav-list li");
console.log("Navigation list items:", navItems);

const lastParagraph = document.querySelector("p:last-of-type");
console.log("Last paragraph:", lastParagraph);


// ============================================
// TASK 9.2: TRAVERSING THE DOM
// ============================================

console.log("Task 9.2: Traversing the DOM");

const headerElement = document.querySelector("#main-header");
const navElement = headerElement.querySelector("nav");
console.log("Header:", headerElement);
console.log("Nav inside header:", navElement);

const firstNavLink = document.querySelector(".nav-link");
const parentListItem = firstNavLink.parentElement;
console.log("Parent list item:", parentListItem);

const articleElement = document.querySelector("article");
const nextSibling = articleElement.nextElementSibling;
console.log("Next sibling of article:", nextSibling);

const navList = document.querySelector(".nav-list");
const navChildItems = navList.children;
console.log("Navigation list items:", navChildItems);

const footerElement = document.querySelector("footer");
const bodyElement = footerElement.parentElement;
console.log("Footer:", footerElement);
console.log("Body:", bodyElement);


// ============================================
// TASK 9.3: MODIFYING CONTENT
// ============================================

console.log("Task 9.3: Modifying Content");

const titleElement = document.querySelector(".title");
console.log("Original title:", titleElement.textContent);
console.log("Visible title:", titleElement.innerText);

titleElement.textContent = "Updated Article Title";

const articleContent = document.querySelector("article");
console.log("Article HTML:", articleContent.innerHTML);

const userInput = "<b>hi</b>";
const safeParagraph = document.createElement("p");
safeParagraph.textContent = userInput;
articleContent.appendChild(safeParagraph);

const firstNavigationLink = document.querySelector(".nav-link");
console.log("Original href:", firstNavigationLink.getAttribute("href"));

firstNavigationLink.setAttribute("href", "https://developer.mozilla.org");

console.log("Updated href:", firstNavigationLink.href);
console.log("Has target attribute:", firstNavigationLink.hasAttribute("target"));

const containerElement = document.querySelector(".container");

containerElement.classList.add("highlight");
console.log("Highlight added:", containerElement.classList.contains("highlight"));

containerElement.classList.remove("highlight");
console.log("Highlight removed:", containerElement.classList.contains("highlight"));

containerElement.classList.toggle("highlight");
console.log("Highlight toggled:", containerElement.classList.contains("highlight"));


// ============================================
// TASK 9.4: ADDING AND REMOVING ELEMENTS
// ============================================

console.log("Task 9.4: Adding and Removing Elements");

const practiceArticle = document.querySelector("article");

const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was created with JavaScript.";
newParagraph.classList.add("content", "highlight");
practiceArticle.appendChild(newParagraph);

const firstParagraph = practiceArticle.querySelector("p");
const insertedParagraph = document.createElement("p");
insertedParagraph.textContent = "This paragraph was inserted before the first paragraph.";
practiceArticle.insertBefore(insertedParagraph, firstParagraph);

function addNavItem(text, href) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.classList.add("nav-link");

    listItem.appendChild(link);
    document.querySelector(".nav-list").appendChild(listItem);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

const originalNavItem = document.querySelector(".nav-link").parentElement;
const clonedNavItem = originalNavItem.cloneNode(true);

clonedNavItem.querySelector("a").textContent = "New Link";
clonedNavItem.querySelector("a").href = "#new-link";
document.querySelector(".nav-list").appendChild(clonedNavItem);

const temporaryParagraph = document.createElement("p");
temporaryParagraph.textContent = "This paragraph will be removed.";
practiceArticle.appendChild(temporaryParagraph);
temporaryParagraph.remove();

console.log("New paragraphs, navigation items, and a cloned link were added.");
console.log("The temporary paragraph was removed.");


// ============================================
// TASK 10.1: EVENT LISTENERS
// ============================================

console.log("Task 10.1: Event Listeners");

const clickButton = document.createElement("button");
clickButton.textContent = "Click Me";
clickButton.id = "practice-click-button";
document.body.appendChild(clickButton);

clickButton.addEventListener("click", function () {
    console.log("Button clicked!");
});

clickButton.addEventListener("click", function () {
    console.log("Clicked again!");
});

function handlePracticeClick() {
    console.log("Handled!");
}

clickButton.addEventListener("click", handlePracticeClick);
clickButton.removeEventListener("click", handlePracticeClick);

const counterSection = document.createElement("section");
counterSection.classList.add("container");

const counterHeading = document.createElement("h2");
counterHeading.textContent = "Click Counter";

const counterDisplay = document.createElement("p");
counterDisplay.textContent = "Count: 0";

const increaseButton = document.createElement("button");
increaseButton.textContent = "+";
increaseButton.type = "button";

const decreaseButton = document.createElement("button");
decreaseButton.textContent = "-";
decreaseButton.type = "button";

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.type = "button";

counterSection.append(
    counterHeading,
    counterDisplay,
    increaseButton,
    decreaseButton,
    resetButton
);
document.body.appendChild(counterSection);

let count = 0;

function updateCounter() {
    counterDisplay.textContent = `Count: ${count}`;
}

increaseButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});


// ============================================
// TASK 10.2: EVENT OBJECT AND KEYBOARD SHORTCUTS
// ============================================

console.log("Task 10.2: Event Object and Keyboard Shortcuts");

const eventButton = document.createElement("button");
eventButton.textContent = "Inspect Click Event";
eventButton.type = "button";
document.body.appendChild(eventButton);

eventButton.addEventListener("click", function (event) {
    console.log("Event type:", event.type);
    console.log("Element clicked:", event.target);
    console.log("Current target:", event.currentTarget);
});

const shortcutForm = document.createElement("form");
shortcutForm.classList.add("container");

const shortcutInput = document.createElement("input");
shortcutInput.type = "text";
shortcutInput.placeholder = "Type something here";
shortcutInput.id = "shortcut-input";

const shortcutSubmit = document.createElement("button");
shortcutSubmit.type = "submit";
shortcutSubmit.textContent = "Submit";

shortcutForm.append(shortcutInput, shortcutSubmit);
document.body.appendChild(shortcutForm);

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Ctrl + S shortcut detected!");
    }

    if (event.key === "Escape") {
        shortcutInput.value = "";
    }

    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        shortcutForm.requestSubmit();
    }
});

shortcutForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted: " + shortcutInput.value);
});


// ============================================
// TASK 10.3: EVENT BUBBLING AND DELEGATION
// ============================================

console.log("Task 10.3: Event Bubbling and Delegation");

// Exercise 1: Event bubbling
const bubblingParent = document.createElement("div");
const bubblingChild = document.createElement("button");

bubblingParent.classList.add("container");
bubblingChild.textContent = "Click Child";
bubblingChild.id = "bubbling-child";
bubblingChild.type = "button";

bubblingParent.append("Parent area: ");
bubblingParent.appendChild(bubblingChild);
document.body.appendChild(bubblingParent);

bubblingParent.addEventListener("click", function () {
    console.log("Parent clicked");
});

bubblingChild.addEventListener("click", function () {
    console.log("Child clicked");
});

// Exercise 2: Event delegation
const delegatedSection = document.createElement("section");
delegatedSection.classList.add("container");

const delegatedHeading = document.createElement("h2");
delegatedHeading.textContent = "Delegated Task List";

const delegatedList = document.createElement("ul");
delegatedList.id = "delegated-task-list";

function addDelegatedTask(text) {
    const item = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = text + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.classList.add("delete-task");

    item.append(taskText, deleteButton);
    delegatedList.appendChild(item);
}

addDelegatedTask("Learn event bubbling");
addDelegatedTask("Practise event delegation");
addDelegatedTask("Build a to-do list");

delegatedSection.append(delegatedHeading, delegatedList);
document.body.appendChild(delegatedSection);

delegatedList.addEventListener("click", function (event) {
    if (event.target.matches(".delete-task")) {
        event.target.closest("li").remove();
    }
});


 // TASK 10.4: FORM HANDLING AND VALIDATION
console.log("Task 10.4: Form Handling and Validation");

const practiceContactForm = document.querySelector("#contact-form");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");

const formMessage = document.createElement("p");
formMessage.id = "form-message";
practiceContactForm.appendChild(formMessage);

practiceContactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();

    if (nameValue === "" || emailValue === "") {
        formMessage.textContent = "Please enter both your name and email.";
        return;
    }

    formMessage.textContent = `Thank you, ${nameValue}! Your form is valid.`;
    practiceContactForm.reset();
});
