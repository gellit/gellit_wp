let clouds = document.getElementById("clouds");
let gellitbead = document.getElementById("gellitbead");
let background = document.getElementById("background");
let middleground = document.getElementById("middleground");
let header = document.querySelector("header")
let foreground = document.getElementById("foreground");
let uparrow = document.getElementById("uparrow");
let distort = document.getElementById("vp2")

window.addEventListener("scroll", function(){
    let screenWidth = document.body.offsetWidth;

    let value = window.scrollY;
    clouds.style.left = value * 0.25 + "px";
    clouds.style.top = value * 0.25 + "px";
    gellitbead.style.top = 100 + value * 1.2 + "px";
    
    gellitbead.style.opacity = 0 + 0.2 / 60 * value;
    vp2.style.opacity = 0 + 0.2 / 10 * (value -51);
    if(gellitbead.style.opacity >= 0.85){
        gellitbead.style.opacity = 0.85;
    }

    if(screenWidth <= 991){
        if(value < 50){
            uparrow.style.opacity = 0;
        }else{
            uparrow.style.opacity = (value - 300)/1000;
            if(uparrow.style.opacity>=0.8){
                uparrow.style.opacity = 0.8;
            }
        }
    }else{
        if(value < 100){
            uparrow.style.opacity = 0;
        }else{
            uparrow.style.opacity = (value - 600)/1000;
            if(uparrow.style.opacity>=0.8){
                uparrow.style.opacity = 0.8;
            }
        }
    }
    

    
    let clipRadius = 0;
    let clipCoEff = 0;
    let vpHeight = 0;
    let initClipPath = 0;
    let initScrollClip = 0;
    let scrollRangeClip = 0;
    if(screenWidth <= 991){
        clipRadius = 25;
        clipCoEff = 1.18;
        vpHeight = 81;
        initClipPath = -3;
        initScrollClip = 25;
        scrollRangeClip = 166;
    }else{
        clipRadius = 45;
        clipCoEff = 1.5;
        vpHeight = 134;
        initClipPath = -10;
        initScrollClip = 54;
        scrollRangeClip = 260;
    }


    let clipPath = 0;
    if(value<(initScrollClip)){
        vp2.style.clipPath = "circle(" + clipRadius.toString() + "px at 50% " + ((-1)*initClipPath).toString() + "px)"
    }else{
        let slope = (vpHeight + initClipPath*(-2))/scrollRangeClip;;
        let section = vpHeight + initClipPath*(-1) - slope * (scrollRangeClip + initScrollClip);
        clipPath = slope * value + section;
        vp2.style.clipPath = "circle(" + clipRadius.toString() + "px at 50% " + clipPath.toString() + "px)"
    }

    logo.style.opacity = 1 - 1 / 400 * value;
    
    background.style.top = value * 0.5 + "px";
    middleground.style.top = value * 0.25 + "px";
    foreground.style.top = value * 0 + "px";
    header.style.top = value * 0.5 + "px";

    
})


            