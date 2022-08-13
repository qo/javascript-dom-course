const ul = document.querySelector("ul");
console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement;
console.log(html.parentNode);

const ulChildNodes = ul.childNodes;
console.log(ulChildNodes);
console.log(ul.firstChild); // #text, not .fav-movies-list-item
console.log(ul.lastChild); // #text, not .fav-movies-list-item

ulChildNodes[1].style.color = "#EB5C68"; // gotta change second element here

const ulChildren = ul.children;
console.log(ulChildren);
console.log(ul.firstElementChild); // .fav-movies-list-item
console.log(ul.lastElementChild); // .fav-movies-list-item

ulChildren[1].style.color = "#EB5C68";

console.log(ulChildren[1].previousElementSibling);
console.log(ulChildren[1].nextElementSibling);