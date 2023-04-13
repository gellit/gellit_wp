let clouds = document.getElementById("clouds");
let gellitbead = document.getElementById("gellitbead");
let background = document.getElementById("background");
let middleground = document.getElementById("middleground");
let header = document.querySelector("header")
let foreground = document.getElementById("foreground");
let uparrow = document.getElementById("uparrow");
let distort = document.getElementById("vp2")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    clouds.style.left = value * 0.25 + "px";
    clouds.style.top = value * 0.25 + "px";
    gellitbead.style.top = 100 + value * 1.2 + "px";
    
    gellitbead.style.opacity = 0 + 0.2 / 60 * value;
    vp2.style.opacity = 0 + 0.2 / 10 * (value -51);
    if(gellitbead.style.opacity >= 0.85){
        gellitbead.style.opacity = 0.85;
    }
    if(value < 100){
        /*gellitbead.style.opacity = 0 + 0.2 / 70 * value;*/
        uparrow.style.opacity = 0;
    }else{
        /*gellitbead.style.opacity = 1 - 0.2 / 500 * value;*/
        uparrow.style.opacity = (value - 600)/1000;
        if(uparrow.style.opacity>=0.8){
            uparrow.style.opacity = 0.8;
        }
    }

    let initClipPath = -51;
    let clipPath = 0;
    if(value<(initClipPath*(-1))){
        vp2.style.clipPath = "circle(45px at 50% " + initClipPath.toString() + "px)"
    }else{
        clipPath = initClipPath + value/1.5;
        vp2.style.clipPath = "circle(45px at 50% " + clipPath.toString() + "px)"
    }
    console.log(value);

    logo.style.opacity = 1 - 1 / 400 * value;
    
    background.style.top = value * 0.5 + "px";
    middleground.style.top = value * 0.25 + "px";
    foreground.style.top = value * 0 + "px";
    header.style.top = value * 0.5 + "px";
})


            