
function toggleMenu(open = true) {
  const menu = document.querySelector('.header__nav-menu');
  const closeIcon = document.querySelector('.header__close-icon');
  const burgerIcon = document.querySelector('.header__burger-menu');
  const firstNavLink = document.querySelector('.header__nav-link');


  [menu, closeIcon, burgerIcon].forEach(el => el.classList.toggle('active'));

  if (open) {

    if (firstNavLink) firstNavLink.focus();
  } else {

    if (burgerIcon) burgerIcon.focus();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const burgerIcon = document.querySelector('.header__burger-menu');
  const closeMenu = document.querySelector('.header__close-icon');
  const navLinks = document.querySelectorAll('.header__nav-link');
  const menu = document.querySelector('.header__nav-menu');


  if (burgerIcon) {
    burgerIcon.addEventListener('click', () => toggleMenu(true));
    burgerIcon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(true);
      }
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener('click', () => toggleMenu(false));
    closeMenu.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu(false);
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
