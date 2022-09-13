var navlinks = document.getElementById("nav-links");

function showMenu() {
    navlinks.style.right = "0";
}

function hideMenu() {;
    navlinks.style.right = "-200px";
}

const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison #image-before");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

slider.addEventListener("input", function(e) {
    let sliderValue = e.target.value + "%";
    beforeImage.style.width = sliderValue;
    sliderLine.style.left = sliderValue;
    sliderIcon.style.left = sliderValue;
})