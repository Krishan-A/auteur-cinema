const hamburgerButton = document.querySelector('.navBarButton');
let menuOpen = false;
hamburgerButton.addEventListener('click', () => {
  if(!menuOpen) {
    hamburgerButton.classList.add('open');
    menuOpen = true;
  } else {
    hamburgerButton.classList.remove('open');
    menuOpen = false;
  }
});