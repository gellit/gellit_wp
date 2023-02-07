let clouds = document.getElementById("clouds");
let gellitbead = document.getElementById("gellitbead");
let background = document.getElementById("background");
let middleground = document.getElementById("middleground");
let header = document.querySelector("header")
let foreground = document.getElementById("foreground");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    clouds.style.left = value * 0.25 + "px";
    clouds.style.top = value * 0.25 + "px";
    gellitbead.style.top = 100 + value * 1.2 + "px";
    gellitbead.style.width = 200 - 66 / 600 * value + "px";
    if(value < 100){
        gellitbead.style.opacity = 0 + 0.8 / 100 * value;
    }else{
        gellitbead.style.opacity = 1 - 0.2 / 500 * value;
    }
    
    logo.style.opacity = 1 - 1 / 400 * value;
    
    background.style.top = value * 0.5 + "px";
    middleground.style.top = value * 0.25 + "px";
    foreground.style.top = value * 0 + "px";
    header.style.top = value * 0.5 + "px";
})

            