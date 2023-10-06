// When the user scrolls down 50px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () { scrollFunction() };

// search

var acKutu = document.getElementById("acKutu");
var altKutu = document.getElementById("altKutu");
var buyutec = document.getElementById("buyutec");

buyutec.addEventListener("click", function (e) {
    e.stopPropagation(); // Arama kutusuna tıklama olayını durdur
    altKutu.style.display = "block";
});

document.addEventListener("click", function () {
    altKutu.style.display = "none";
});

acKutu.addEventListener("click", function (e) {
    e.stopPropagation(); // Arama kutusuna tıklama olayını durdur
});



