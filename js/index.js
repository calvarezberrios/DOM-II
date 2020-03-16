// Your code goes here
const navLinks = document.querySelectorAll(".main-navigation .nav-container .nav .nav-link");
const navBar = document.querySelector(".main-navigation .nav-container");

navBar.addEventListener("click", (event) => {
    alert("Why you poking me!");
});

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
    navLinks.forEach(link => link.style.textDecoration = "none")
    event.target.style.textDecoration = "underline";
    
}));

const body = document.querySelector("body");

window.addEventListener("load", () => {
    alert("Welcome to Fun Bus!\n\nLet's make your travels fun!!!");

    let name = prompt("What is your name?");
    

    if(name != "" && name != null) {
        alert(`Hello ${name}! Let's get do this!`); 
        name = name[0].toUpperCase() + name.slice(1);
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
        img.style.zIndex = "1";
    });
});

const busImg = document.querySelector(".container .intro img");

busImg.addEventListener("dblclick", (event) => {
    if(busImg.style.filter === " " || busImg.style.filter === "invert(0)") {
        busImg.style.filter = "invert(1)";
    } else {
        busImg.style.filter = "invert(0)";
    }

    busImg.style.zIndex = "1";
    
});


//Creation of Sign Up Pop Up form in the middle of screen when clicking on the Sign Me Up Buttons

const signUpPop = document.createElement("div");
const formTitle = document.createElement("h2");
const signUpForm = document.createElement("form");
const nameInput = document.createElement("input");
const emailInput = document.createElement("input");
const phoneInput = document.createElement("input");
const submitInput = document.createElement("input");
const closePop = document.createElement("input");

signUpPop.className = "signUpContainer";
signUpForm.setAttribute("action", "#");
signUpForm.setAttribute("target", "_blank");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Enter Your Name");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "yourEmail@email.com");
phoneInput.setAttribute("type", "tel");
phoneInput.setAttribute("placeholder", "555-555-5555");
submitInput.setAttribute("type", "submit");
submitInput.setAttribute("value", "Submit");
closePop.setAttribute("type", "button");
closePop.setAttribute("value", "Close");




body.appendChild(signUpPop);
signUpPop.appendChild(formTitle);
signUpPop.appendChild(signUpForm);
signUpForm.appendChild(nameInput);
signUpForm.appendChild(emailInput);
signUpForm.appendChild(phoneInput);
signUpForm.appendChild(submitInput);
signUpForm.appendChild(closePop);


signUpPop.querySelector("h2").innerText = "Sign Up \nto Travel HERE!!!"
signUpPop.style.display = "block";
signUpPop.style.boxShadow = "8px 8px 10px 0px black";
signUpPop.style.position = "fixed";
signUpPop.style.width = "300px";
signUpPop.style.height = "300px";
signUpPop.style.top = "30%";
signUpPop.style.left = "40%";
signUpPop.style.background = "#FFFFFF";
signUpPop.style.border = "1px solid black";
signUpPop.style.padding = "50px 10px";
signUpPop.style.textAlign = "center";
signUpPop.style.borderRadius = "20px";
signUpPop.style.opacity = "0";

signUpForm.style.display = "flex"
signUpForm.style.flexDirection = "column";
signUpForm.style.justifyContent = "space-between";
signUpForm.style.alignItems = "space-between";
signUpForm.querySelectorAll("input").forEach(input => input.style.marginBottom = "30px");

closePop.style.position = "absolute";
closePop.style.top = "0";
closePop.style.right = "10px";
closePop.style.fontSize = "20px";

signUpForm.querySelectorAll("input[type=button], input[type=submit]").forEach(btn => btn.style.cursor = "pointer");

// End Of Pop up form creation



submitInput.addEventListener("click", (event) => {
    event.preventDefault();
});

const signUpBtns = document.querySelectorAll(".btn");

signUpBtns.forEach(btn => btn.addEventListener("click", (event) => {
    
    //signUpPop.style.display = "block";

    TweenMax.fromTo(".signUpContainer", 1, {
        delay: .5,
        opacity: 0
    }, {
        delay: .8,
        opacity: 1,
        ease: Quad.easeInOut,
        scale: 2,
        transformOrigin: "50% 50% -0px",
        yoyo: false,
        repeat: 0,
        repeatDelay: 1
    });
    
}));

closePop.addEventListener("click", (event) => {
    

    TweenMax.fromTo(".signUpContainer", 1, {
        delay: .5,
        opacity: 1
    }, {
        delay: .8,
        opacity: 0,
        ease: Quad.easeInOut,
        scale: 1,
        transformOrigin: "50% 50% -0px",
        yoyo: false,
        repeat: 0,
        repeatDelay: 1
    });

    //signUpPop.style.display = "none";
});