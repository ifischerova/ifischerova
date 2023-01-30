export function toggleIcon() {
    document.getElementById('hamburger').classList.toggle("is-active");
};

export function closeHamburgerMenu() {
    toggleIcon();
    document.getElementById('toggle').checked = false;
};
