const darkButt = document.querySelector(`.moon`);
const lightButt = document.querySelector(`.sun`);
const navLinks = document.querySelector(`.topnav a`);

const darkmode = function(){
    darkButt.classList.add("hidden");
    lightButt.classList.remove(`hidden`);
    document.body.style.backgroundColor = "black";
    document.querySelector(`.main`).style.color = "white";
    document.querySelector(`.topnav`).style.backgroundColor= `rgb(26, 26, 26)`;
    document.querySelectorAll(".topnav a").forEach(link => {
        link.style.color = "white";
    })
}
const lightmode = function(){
    darkButt.classList.remove("hidden");
    lightButt.classList.add(`hidden`);
    document.body.style.backgroundColor="white";
    document.querySelector(`.main`).style.color = "black";
    document.querySelector(`.topnav`).style.backgroundColor= `rgb(241, 241, 241)`;
    document.querySelectorAll(".topnav a").forEach(link =>{
        link.style.color = "black";
    })

}

darkButt.addEventListener("click",darkmode)
lightButt.addEventListener(`click`,lightmode)