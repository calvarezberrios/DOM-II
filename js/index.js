// Your code goes here
const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");

navLinks.forEach(link => link.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transition = "all 0.2s";
}));

navLinks.forEach(link => link.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
}));


const body = document.querySelector("body");

window.addEventListener("scroll", (event) => {
    const randNum = Math.floor(Math.random() * 9) + 1;
    body.style.background = `#36AF${randNum}${randNum}`;
});

const images = document.querySelectorAll("img");

window.addEventListener("resize", (event) => {
    images.forEach(img => {
        if(img.style.transform === "scale(1)") {
            img.style.transform = "scale(.4)";
        } else {
            img.style.transform = "scale(1)";
        }
        document.querySelector(".main-navigation").style.zIndex = "1";
        img.style.transition = "all .4s";
    });
});