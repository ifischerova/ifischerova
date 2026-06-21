// Floating "back to top" button: hidden at the top of the page, fades in once
// the user has scrolled down, and smooth-scrolls back up on tap/click.

const SHOW_AFTER_PX = 300;

export function initScroll() {
    const button = document.getElementById('top-button');
    if (!button) return;

    const update = () => {
        const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        button.classList.toggle('is-visible', scrolled > SHOW_AFTER_PX);
    };

    window.addEventListener('scroll', update, { passive: true });
    update(); // set the correct initial state on load
}

export function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
