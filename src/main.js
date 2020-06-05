let hogehoge;
let prev;
window.addEventListener("DOMContentLoaded", function() {
    /*
    document.getElementById("theme-switch-btn").onclick = function() {
        document.body.classList.toggle("darkmode-body");
    };
    */
    hogehoge = document.getElementById("head");
    prev = document.documentElement.scrollTop > document.getElementById("cover").clientHeight;
})

window.onscroll = function() {
    if (document.documentElement.scrollTop > document.getElementById("cover").clientHeight){
        this.console.log("Yes!");
        if (!prev){
            hogehoge.style.opacity="1.0"; 
        }
        prev = true;
    }
    else {
        if (prev){
            hogehoge.style.opacity="0";
        }
        prev = false;
    }
}