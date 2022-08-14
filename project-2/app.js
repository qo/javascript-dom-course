const popUp = document.querySelector("#pop-up")

const showPopUp = document.querySelector("#show-pop-up");
showPopUp.addEventListener(
    "click",
    () => {
        popUp.style.display = "flex";
        popUp.style.flexDirection = "row";
        popUp.style.justifyContent = "space-between";
    }
)

const hidePopUp = document.querySelector("#hide-pop-up");
hidePopUp.addEventListener(
    "click",
    () => {
        popUp.style.display = "none";
    }
)