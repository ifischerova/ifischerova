import { closeHamburgerMenu, toggleIcon } from './menu.js'
import { initScroll, scrollToTop } from './scroll-button.js'
import { initI18n } from './i18n.js'

initScroll()
initI18n()

window.closeHamburgerMenu = closeHamburgerMenu
window.toggleIcon = toggleIcon
window.scrollToTop = scrollToTop
