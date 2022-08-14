// Event Delegation

const cards = document.querySelector(".cards");
cards.addEventListener(
    "click",
    (e) => {
        if (e.target.matches("button")) {
            const card = e.target.parentElement.parentElement;
            card.style.backgroundColor = "#3d3a3e";
        }
    }
)

const newCard = document.createElement("main");
newCard.setAttribute("class", "card");

const newCardTitle = document.createElement("h2");
newCardTitle.setAttribute("class", "card-title");
newCardTitle.appendChild(document.createTextNode("Card 4"));

const newCardContent = document.createElement("main")
newCardContent.setAttribute("class", "card-content");

const newCardText = document.createElement("h3")
newCardText.setAttribute("class", "card-text");
newCardText.appendChild(document.createTextNode("Card 4 Text"));

const newCardButton = document.createElement("button")
newCardButton.setAttribute("class", "card-button");
newCardButton.appendChild(document.createTextNode("Click"));

newCardContent.appendChild(newCardText);
newCardContent.appendChild(newCardButton);

newCard.appendChild(newCardTitle);
newCard.append(newCardContent);

cards.appendChild(newCard);