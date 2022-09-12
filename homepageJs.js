var navlinks = document.getElementById("nav-links");

function showMenu() {
    navlinks.style.right = "0";
}

function hideMenu() {;
    navlinks.style.right = "-200px";
}

const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison #image-before");

slider.addEventListener("input", (e) => {
    console.log("log" + e.target.value)
    let sliderValue = e.target.value + "%";
    beforeImage.style.width = sliderValue;
})