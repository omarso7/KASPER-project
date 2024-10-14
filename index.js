let mainBars = document.getElementById('bar');
let content = document.getElementById("content");

// mainBars.onclick(function () {
    // })
    
mainBars.addEventListener('click', function () {
    if ((content.style.display == "block")) {
        content.style.display = "none";
    }
    else {
        content.style.display = "block";
    }
});

let prtfolioBtn = document.querySelectorAll("#porto-btn p");
for (let i = 0; i < prtfolioBtn.length; i++){
    prtfolioBtn[i].addEventListener('click', function () {
        prtfolioBtn.forEach(function (ele) {
            ele.style.backgroundColor = 'white';
        });
        prtfolioBtn[i].style.backgroundColor = "#19C8FA";
    })
}

let firstImage = document.getElementById("fr-img");
let secImage = document.getElementById("se-img");


prtfolioBtn[1].onclick = function () {
    firstImage.style.cssText = `background-image: url('../imgs/laptop.png');
    background-size: cover;`;
    document.querySelector('#fr-img i').style.display = 'none';
}

prtfolioBtn[0].onclick = function () {
    firstImage.style.backgroundImage = 'none';
    document.querySelector("#fr-img i").style.display = "flex";

}

let topBtn = document.querySelector('.topbtn');

setInterval(function () {
    if (window.scrollY < 1500) {
      topBtn.style.animationName = "topbtn2";
      setTimeout(function () {
        topBtn.style.display = "none";
      }, 300);
    } else if (window.scrollY > 1500) {
      topBtn.style.display = "flex";
      topBtn.style.animationName = "topbtn1";
    }
}, 1);

let arrows = document.querySelectorAll(".interface .arrows i");

for (let i = 0; i < arrows.length; i++){
    arrows[i].onclick = function () {
        arrows[i].style.cssText = 'animation-name: arrow;'
        setTimeout(function () {
            arrows[i].style.cssText = "animation-name: none;";
        },400)
    }
}