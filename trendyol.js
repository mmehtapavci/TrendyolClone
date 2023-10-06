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


// Search Kutusu Açılması
document.addEventListener("DOMContentLoaded", function () {
    var acKutu = document.getElementById("acKutu");
    var altKutu = document.getElementById("altKutu");

    if (acKutu && altKutu) {
        acKutu.addEventListener("click", function (e) {
            e.preventDefault();

            if (altKutu.style.display === "none" || altKutu.style.display === "") {
                altKutu.style.display = "block";
            } else {
                altKutu.style.display = "none";
            }
        });
    } else {
        console.error("acKutu veya altKutu bulunamadı.");
    }
});
