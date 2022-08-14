import quotes from "./data/quotes.js";

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#new-quote-button");

button.addEventListener(
    "click",
    () => {
        console.log("clicked");
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quote.innerText = newQuote.quote;
        author.innerText = newQuote.author;
    }
);