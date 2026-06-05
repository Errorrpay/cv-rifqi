const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");

// Hanya untuk halaman Home
if(window.location.pathname.includes("index.html") || 
window.location.pathname === "/"){

    if(sessionStorage.getItem("welcomeShown")){
        loader.style.display = "none";
    }

    if(enterBtn){
        enterBtn.addEventListener("click", () => {

            loader.classList.add("hide-loader");

            sessionStorage.setItem("welcomeShown","true");

            setTimeout(()=>{
                loader.style.display="none";
            },1000);

        });
    }

}

enterBtn.addEventListener("click", () => {
    loader.classList.add("hide-loader");
});
// =====================
// LOADING ANIMATION
// =====================

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});


// =====================
// FADE IN PAGE
// =====================

document.addEventListener("DOMContentLoaded", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition = "0.8s ease";
document.body.style.opacity = "1";

},100);

});


// =====================
// ACTIVE NAVBAR
// =====================

const currentPage =
window.location.pathname.split("/").pop();

const links =
document.querySelectorAll("nav a");

links.forEach(link => {

const href = link.getAttribute("href");

if(href === currentPage){

link.classList.add("active");

}

});


// =====================
// CARD ANIMATION
// =====================

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = ".8s ease";

observer.observe(card);

});


// =====================
// CURSOR GLOW
// =====================

const glow =
document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left =
e.clientX - 100 + "px";

glow.style.top =
e.clientY - 100 + "px";

});


// =====================
// BUTTON EFFECT
// =====================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform =
"translateY(-4px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform =
"translateY(0px)";

});

});


// =====================
// YEAR AUTO UPDATE
// =====================

const year =
document.getElementById("year");

if(year){

year.innerText =
new Date().getFullYear();

}