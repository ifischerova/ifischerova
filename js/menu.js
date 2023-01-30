export function toggleIcon() {
    document.getElementById('hamburger').classList.toggle("is-active");
};

export function closeHamburgerMenu() {
    toggleIcon();
    this.document.getElementById('toggle').checked = false;
};
