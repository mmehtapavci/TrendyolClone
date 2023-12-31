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



// Hesabım Sekmesine Gelindiğinde
var hideTimeout;

function acListe() {
    var liste = document.getElementById("liste");
    liste.style.display = "block";
}


function kapatListe() {
    hideTimeout = setTimeout(function () {
        var liste = document.getElementById("liste");
        liste.style.display = "none";
    },
        500);
}


function cancelHide() {
    clearTimeout(hideTimeout);
}

function kapatListeDelayed() {
    hideTimeout = setTimeout(function () {
        var liste = document.getElementById("liste");
        liste.style.display = "none";
    }, 500);
}
// JavaScript to update the username for the first list item
document.getElementById("username1").textContent = "Maşite Mehtap Avcı";


// Sepet*****************
$(document).ready(function () {
    $("#myaccount").hover(function () {
        $("#liste2").stop().slideToggle(200);
    });

    $("#liste2").hover(function () {
        $(this).stop();
    }, function () {
        $(this).stop().slideToggle(200);
    });
});




// Kadın**************
$(document).ready(function () {
    $("#woman").hover(
        function () {
            // Mouse üzerine gelindiğinde içerik kutusunu göster
            $(".content-box").stop(true, true).slideDown();
        }
    );

    $(".content-box").hover(
        function () {
            // İçerik kutusunun üzerindeyken kapatma işlemini iptal et
            $(this).stop(true, true);
        },
        function () {
            // İçerik kutusunun üzerinden çıkıldığında kapatma işlemi devam eder
            $(this).slideUp();
        }
    );
});
