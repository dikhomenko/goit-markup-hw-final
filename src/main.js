/* Header Navigation */
const $mobileNavModal = document.getElementById('mobile-nav-modal');
const $mobileNavClose = document.getElementById('mobile-nav-close');
const $mobileNavOpen = document.getElementById('mobile-nav-open');
const $mobileNavLinks = document.querySelectorAll('.nav-mobile .nav-item');

const OPEN_CSS_CLASS = 'is-open';

const onCloseMobileNavMenu = () => $mobileNavModal.classList.remove(OPEN_CSS_CLASS);

$mobileNavOpen.onclick = () => $mobileNavModal.classList.add(OPEN_CSS_CLASS);
$mobileNavClose.onclick = onCloseMobileNavMenu;

$mobileNavLinks.forEach(element => {
    element.onclick = onCloseMobileNavMenu;
});