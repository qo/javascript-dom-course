function revealArticle(article) {
    console.log("revealing");
    if (article.classList.contains("revealed")) {
        article.classList.remove("revealed")
    }
    else {
        article.classList.add("revealed");
    }
}

const revealButtonList = document.querySelectorAll(".article-reveal-button");
revealButtonList.forEach(
    revealButton => {
        const article = revealButton.parentElement.children[1];
        revealButton.addEventListener("click", () => revealArticle(article));
    }
)