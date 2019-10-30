var navBtn = document.querySelector('.page-header__nav-btn');

navBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  this.classList.toggle('page-header__nav-btn--opened');
});
