const openButton = document.querySelector('.header--openMenu');
const headerNavigation = document.querySelector('.header--navigation');
const headerMask = document.querySelector('.header--navMask');

document.addEventListener('click', (e) => {
  if (openButton.contains(e.target) || headerNavigation.contains(e.target))
    return;

  openButton.classList.remove('header--openMenu__open');
  headerNavigation.classList.remove('header--navigation__open');
  headerMask.classList.remove('header--navMask__open');
});
openButton.addEventListener('click', () => {
  openButton.classList.toggle('header--openMenu__open');
  headerNavigation.classList.toggle('header--navigation__open');
  headerMask.classList.toggle('header--navMask__open');
});
