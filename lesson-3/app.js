const list = document.querySelector("ul");
const listItem = document.createElement("li");
const listItemText = document.createElement("p");

listItem.append(listItemText);
list.append(listItem);

listItemText.innerText = "The Simpsons";
listItem.classList.add("fav-movies-list-item");
console.log(listItem.classList.contains("fav-movies-list-item"));

const listCollection = document.getElementsByClassName("fav-movies-list-item");
const listArray = Array.from(listCollection);
const marvelItem = listArray.find(item => item.innerText === "Marvel");
marvelItem.remove();