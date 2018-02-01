let YOffset = 0;
window.onscroll = doScrollStuff;

let backgrounds = [];
for (let i = 1; i <= 3; i++) {
    backgrounds[i] = document.querySelector("#image" + i);
}

let slidingText = document.querySelector("#sliding-text");

let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");

function isElementInViewportY(el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function doScrollStuff() {
    getScrollPosition(); // Puts the scroll position in the scrollObject and shows it..

    for (let i = 1; i <= 3; i++) {
        let pos = Math.floor(YOffset / 3) + "px";
        backgrounds[i].style.backgroundPositionY = "-" + pos;
    }

    // Sliding by
    slidingText.style.left = Math.floor(YOffset * 1.4) + "px";

    // Check if any of our texts are in the viewport.
    if (isElementInViewportY(text1 && text2)) {
        text1.classList = "left-slide-in";
        text2.classList = "right-slide-in";
    } else {
        text1.classList = "left-slide-out";
        text2.classList = "right-slide-out";
    }
}

function getScrollPosition() {
    YOffset = window.pageYOffset;
    document.getElementById("scroll").innerHTML = "De huidige scrollpositie (y) = " + YOffset;
}