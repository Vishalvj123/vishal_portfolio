const fillterButton = document.querySelectorAll(".fillter-btn button");
const fillterablecards = document.querySelectorAll(".projects .wrapper .box-area .box");


const fillterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    fillterablecards.forEach(card => {
        card.classList.add("hide");

        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
    
};
fillterButton.forEach(button => button.addEventListener("click",fillterCards));