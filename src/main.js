let header;
let prev;
let scrolledState = 0;
let isScrolling = false;

window.addEventListener("DOMContentLoaded", function() {
    /*
    document.getElementById("theme-switch-btn").onclick = function() {
        document.body.classList.toggle("darkmode-body");
    };
    */
    document.getElementById("cover-more-scroll").onclick = function() {
        if (!isScrolling){
            isScrolling = true;
            document.addEventListener('touchmove', noScroll, { passive: false });
            document.addEventListener('mousewheel', noScroll, { passive: false });
            scrolledState = document.documentElement.scrollTop;
            scrolltoMain();
        }
    }
    header = document.getElementById("head");
    
    prev = document.documentElement.scrollTop >= document.getElementById("cover").clientHeight;
    if (prev) header.style.opacity="1.0";
    else header.style.opacity="0";
})

window.onscroll = function() {
    if (document.documentElement.scrollTop >= document.getElementById("cover").clientHeight){
        if (!prev){
            header.style.opacity="1.0"; 
        }
        prev = true;
    }
    else {
        if (prev){
            header.style.opacity="0";
        }
        prev = false;
    }
}

function noScroll(event) {
    event.preventDefault();
}

let counter = 0;
function scrolltoMain() {
    var y = document.documentElement.scrollTop;
    //let val = -Math.pow( 2, -10 * counter ) + 1.01; // expoOut
    let t = counter / 0.5;
	val =  t < 1 ? 0.5 * Math.pow( 2, 10 * (t - 1) ) : 0.5 * ( -Math.pow( 2, -10 * (--t)) + 2 ) + 0.01; // expoInOut
    scrollval = (document.getElementById("cover").clientHeight - scrolledState) * val + scrolledState;
    if (scrollval >= y)
        window.scrollTo(0, scrollval);
    counter += 0.01;
    if (y <= document.getElementById("cover").clientHeight || counter < 1.00 || y == document.body.clientHeight) {
        window.setTimeout("scrolltoMain()", 12);
    }
    else {
        document.removeEventListener('touchmove', noScroll, { passive: false });
        document.removeEventListener('mousewheel', noScroll, { passive: false });
        counter = 0;
        isScrolling = false;
    }
}