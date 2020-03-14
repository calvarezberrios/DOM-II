// Your code goes here
const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");

navLinks.forEach(link => link.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transition = "all 0.2s";
}));

navLinks.forEach(link => link.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
}));

navLinks.forEach(link => link.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();
}));

const body = document.querySelector("body");

window.addEventListener("load", () => {
    alert("Welcome to Fun Bus!\n\nLet's make your travels fun!!!");

    let name = prompt("What is your name?");
    name = name[0].toUpperCase() + name.slice(1);

    if(name != "" && name != null) {
        alert(`Hello ${name}! Let's get do this!`); 
    }
    
});

window.addEventListener("scroll", (event) => {
    const randNum = Math.floor(Math.random() * 9) + 1;
    body.style.background = `#36AF${randNum}${randNum}`;
    body.style.transition = "all .8s";
});

const images = document.querySelectorAll("img");
let i = 1;
window.addEventListener("resize", (event) => {
    if(i === 1) {
        i = .5; 
    } else {
        i = 1;
    }
    images.forEach(img => {

        img.style.transform = `scale(${i})`;
        img.style.transition = "all 2s";
        document.querySelector(".main-navigation").style.zIndex = "1";
    });
});

const busImg = document.querySelector(".container .intro img");

busImg.addEventListener("dblclick", (event) => {
    if(busImg.style.filter === " " || busImg.style.filter === "invert(0)") {
        busImg.style.filter = "invert(1)";
    } else {
        busImg.style.filter = "invert(0)";
    }
    
});