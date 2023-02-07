var anim1params = {
    container: document.getElementById('anim1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/anim1/anim1.json"
};

var anim2params = {
    container: document.getElementById('anim2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/anim2/anim2.json"
};

var anim3params = {
    container: document.getElementById('anim3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "assets/anim3/anim3.json"
};

var anim1;
anim1 = lottie.loadAnimation(anim1params);

var anim2;
anim2 = lottie.loadAnimation(anim2params);

var anim3;
anim3 = lottie.loadAnimation(anim3params);