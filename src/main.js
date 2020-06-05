let header;
let prev;
window.addEventListener("DOMContentLoaded", function() {
    /*
    document.getElementById("theme-switch-btn").onclick = function() {
        document.body.classList.toggle("darkmode-body");
    };
    */
    document.getElementById("cover-more-scroll").onclick = function() {
        scrolltoMain();
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

let counter = 0;
function scrolltoMain() {
    var y = document.documentElement.scrollTop;
    //let val = -Math.pow( 2, -10 * counter ) + 1.01; // expoOut
    let t = counter / 0.5;
	if (t < 1)  val =  0.5 * Math.pow( 2, 10 * (t - 1) );
    else val = 0.5 * ( -Math.pow( 2, -10 * (--t)) + 2 ) + 0.01;
    window.scrollTo(0, document.getElementById("cover").clientHeight * val);
    counter += 0.01;
    if (y <= document.getElementById("cover").clientHeight || y == document.body.clientHeight || counter == 1.0) {
        window.setTimeout("scrolltoMain()", 12);
    }
    else {
        counter = 0;
    }
}