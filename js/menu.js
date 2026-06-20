import { updateMenuLabel } from './i18n.js'

export function toggleIcon() {
    document.getElementById('hamburger').classList.toggle("is-active");
    updateMenuLabel();
};

export function closeHamburgerMenu() {
    toggleIcon();
    document.getElementById('toggle').checked = false;
};
