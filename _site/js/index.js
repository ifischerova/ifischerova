function toggleIcon() {
    document.getElementById('hamburger').classList.toggle("is-active");
};

function closeHamburgerMenu() {
    toggleIcon();
    this.document.getElementById('toggle').checked = false;
};

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('top-button').style.display = "block";
    } else {
        document.getElementById('top-button').style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}