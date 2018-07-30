const strongElements = document.getElementsByTagName("strong");
function highlight() {
    for (let i = 0; i < strongElements.length; i++) {
        strongElements[i].classList.add("highlight");
    }
}
function notHighlight() {
    for (let i = 0; i < strongElements.length; i++) {
        strongElements[i].classList.remove("highlight");
    }
}
