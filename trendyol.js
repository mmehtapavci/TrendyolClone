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

// buyutec veya inputAlan'a tıklandığında altKutu açılsın
var acKutu = document.getElementById("acKutu");
var altKutu = document.getElementById("altKutu");
var buyutec = document.getElementById("buyutec");
var aramaKutusu = document.getElementById("aramaKutusu");


buyutec.addEventListener("click", function (e) {
    e.stopPropagation();
    altKutu.style.display = "block";
});

aramaKutusu.addEventListener("click", function (e) {
    e.stopPropagation();
    altKutu.style.display = "block";
});

// Herhangi bir yere tıklandığında altKutu kapanır.
document.addEventListener("click", function () {
    altKutu.style.display = "none";
});
// --------------------------------------

