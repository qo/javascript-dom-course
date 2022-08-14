// Event Capturing

// window.addEventListener(
//     "click",
//     () => console.log("window"),
//     true);
//
// document.addEventListener(
//     "click",
//     () => console.log("document"),
//     true);
//
// document.querySelector("html").addEventListener(
//     "click",
//     () => console.log("html"),
//     true);
//
// document.querySelector("body").addEventListener(
//     "click",
//     () => console.log("body"),
//     true);
//
// document.querySelector("#container").addEventListener(
//     "click",
//     () => console.log("container"),
//     true);
//
// document.querySelector("#content").addEventListener(
//     "click",
//     () => console.log("content"),
//     true);
//
// document.querySelector(".cards").addEventListener(
//     "click",
//     () => console.log("cards"),
//     true);
//
// document.querySelector(".card").addEventListener(
//     "click",
//     () => console.log("card"),
//     true);
//
// document.querySelector(".card-title").addEventListener(
//     "click",
//     () => console.log("card-title"),
//     true);
//
// document.querySelector(".card-content").addEventListener(
//     "click",
//     () => console.log("card-content"),
//     true);
//
// document.querySelector(".card-text").addEventListener(
//     "click",
//     () => console.log("card-text"),
//     true);
//
// document.querySelector(".card-button").addEventListener(
//     "click",
//     (e) => {
//         console.log("card-button");
//         e.target.innerText = "Clicked";
//     },
//     true);

// Event Bubbling

// window.addEventListener(
//     "click",
//     () => console.log("window"),
//     false);
//
// document.addEventListener(
//     "click",
//     () => console.log("document"),
//     false);
//
// document.querySelector("html").addEventListener(
//     "click",
//     () => console.log("html"),
//     false);
//
// document.querySelector("body").addEventListener(
//     "click",
//     () => console.log("body"),
//     false);
//
// document.querySelector("#container").addEventListener(
//     "click",
//     () => console.log("container"),
//     false);
//
// document.querySelector("#content").addEventListener(
//     "click",
//     () => console.log("content"),
//     false);
//
// document.querySelector(".cards").addEventListener(
//     "click",
//     () => console.log("cards"),
//     false);
//
// document.querySelector(".card").addEventListener(
//     "click",
//     () => console.log("card"),
//     false);
//
// document.querySelector(".card-title").addEventListener(
//     "click",
//     () => console.log("card-title"),
//     false);
//
// document.querySelector(".card-content").addEventListener(
//     "click",
//     () => console.log("card-content"),
//     false);
//
// document.querySelector(".card-text").addEventListener(
//     "click",
//     () => console.log("card-text"),
//     false);
//
// document.querySelector(".card-button").addEventListener(
//     "click",
//     (e) => {
//         console.log("card-button");
//         e.target.innerText = "Clicked";
//     },
//     false);

// Stop Propagation

// window.addEventListener(
//     "click",
//     () => console.log("window"),
//     true);
//
// document.addEventListener(
//     "click",
//     () => console.log("document"),
//     true);
//
// document.querySelector("html").addEventListener(
//     "click",
//     () => console.log("html"),
//     true);
//
// document.querySelector("body").addEventListener(
//     "click",
//     () => console.log("body"),
//     true);
//
// document.querySelector("#container").addEventListener(
//     "click",
//     () => console.log("container"),
//     true);
//
// document.querySelector("#content").addEventListener(
//     "click",
//     (e) => {
//         e.stopPropagation();
//         console.log("content");
//     },
//     true);
//
// document.querySelector(".cards").addEventListener(
//     "click",
//     () => console.log("cards"),
//     true);
//
// document.querySelector(".card").addEventListener(
//     "click",
//     () => console.log("card"),
//     true);
//
// document.querySelector(".card-title").addEventListener(
//     "click",
//     () => console.log("card-title"),
//     true);
//
// document.querySelector(".card-content").addEventListener(
//     "click",
//     () => console.log("card-content"),
//     true);
//
// document.querySelector(".card-text").addEventListener(
//     "click",
//     () => console.log("card-text"),
//     true);
//
// document.querySelector(".card-button").addEventListener(
//     "click",
//     (e) => {
//         console.log("card-button");
//         e.target.innerText = "Clicked";
//     },
//     true);

// Once Property

window.addEventListener(
    "click",
    () => console.log("window"),
    true);

document.addEventListener(
    "click",
    () => console.log("document"),
    true);

document.querySelector("html").addEventListener(
    "click",
    () => console.log("html"),
    true);

document.querySelector("body").addEventListener(
    "click",
    () => console.log("body"),
    true);

document.querySelector("#container").addEventListener(
    "click",
    () => console.log("container"),
    true);

document.querySelector("#content").addEventListener(
    "click",
    () => console.log("content"),
    true);

document.querySelector(".cards").addEventListener(
    "click",
    () => console.log("cards"),
    true);

document.querySelector(".card").addEventListener(
    "click",
    () => console.log("card"),
    { once: true });

document.querySelector(".card-title").addEventListener(
    "click",
    () => console.log("card-title"),
    true);

document.querySelector(".card-content").addEventListener(
    "click",
    () => console.log("card-content"),
    true);

document.querySelector(".card-text").addEventListener(
    "click",
    () => console.log("card-text"),
    true);

document.querySelector(".card-button").addEventListener(
    "click",
    (e) => {
        console.log("card-button");
        e.target.innerText = "Clicked";
    },
    true);