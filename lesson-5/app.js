function changeColor(el, color) {
    console.log("lemoine");
    el.style.backgroundColor = color;
}

const cards = document.querySelectorAll(".card");
cards.forEach(
    card => {
        card.addEventListener("mouseover", () => {
            changeColor(card, "#EB5C68");
        });
        card.addEventListener("mouseout", () => {
            changeColor(card, "#2D2A2E");
        })
    }
)