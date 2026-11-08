const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

factButton.addEventListener("click", function () {
    bio.textContent = "Ta treść została zmodyfikowana przez JavaScipt";
    factButton.textContent = "Gotowe!";
});

let i = 0;
const counter = document.querySelector("#counter");
counter.addEventListener("click", () => {
    counter.innerHTML=i;
    i++;
});