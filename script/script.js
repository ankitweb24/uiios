function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// logo script
function popfunc() {
    alert("this is the logo");
}

// counting part
$('.count').counterUP({
    delay: 100,
    time: 3000
})

// scroll up function
mybutton = document.getElementById('scup');
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome, mozila, firefox, opera
}