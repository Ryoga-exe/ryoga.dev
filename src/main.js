window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("theme-switch-btn").onclick = function() {
        document.body.classList.toggle("darkmode-body");
    };
})

window.onscroll = function() {
    if (document.documentElement.scrollTop > document.getElementById("cover").clientHeight){
        this.console.log("Yes!");
    }
}