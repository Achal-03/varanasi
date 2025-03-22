let aboutContainer = document.getElementById("aboutTab");
let visitContainer = document.getElementById("timeToVisitTab");
let attractionsContainer = document.getElementById("attractionsTab");

let aboutBtn = document.getElementById("aboutButton");
let visitBtn = document.getElementById("timeToVisitButton");
let attractionsBtn = document.getElementById("attractionsButton");

visitContainer.classList.add("d-none");
attractionsContainer.classList.add("d-none");

function about() {
    aboutContainer.classList.remove("d-none");
    visitContainer.classList.add("d-none");
    attractionsContainer.classList.add("d-none");

    aboutBtn.classList.add("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionsBtn.classList.remove("selected-button");
}

function visit() {
    aboutContainer.classList.add("d-none");
    visitContainer.classList.remove("d-none");
    attractionsContainer.classList.add("d-none");

    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.add("selected-button");
    attractionsBtn.classList.remove("selected-button");
}

function attractions() {
    aboutContainer.classList.add("d-none");
    visitContainer.classList.add("d-none");
    attractionsContainer.classList.remove("d-none");

    aboutBtn.classList.remove("selected-button");
    visitBtn.classList.remove("selected-button");
    attractionsBtn.classList.add("selected-button");
}
