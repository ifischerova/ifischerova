import { closeHamburgerMenu, toggleIcon } from './menu.js'
import { initScroll, scrollToTop }  from './scroll-button.js'
import { initSubmit } from './form.js'

initScroll()
initSubmit()

window.closeHamburgerMenu = closeHamburgerMenu
window.toggleIcon = toggleIcon
window.scrollToTop = scrollToTop