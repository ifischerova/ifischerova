export function initScroll() {
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
}

export function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}