console.log("hello")
let popUp = document.querySelector(".shared")
let card = document.querySelector(".card")
// let mob = document.querySelector(".activeMob")
let screen = window.matchMedia("(max-width:375px)");



// function mediaQ(screen) {
//     if (screen.matches) {
//         tip.addEventListener("click", () => {
//             console.log("mob2")
//             card.style.display = "none";
//             mob.style.display = "flex";
//         })
//     } else {
//         console.log("web")
//         card.style.display = "flex";
//         mob.style.display = "none";
//         if (mob.style.display === "none") {
           
//         }
//     }
// }
popUp.addEventListener("click", () => {
    console.log("popUp")
    popUp.classList.toggle("active");
})



// mediaQ(screen);
// screen.addListener(mediaQ);