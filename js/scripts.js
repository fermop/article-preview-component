const shareBtn = document.querySelector('.share-btn');
const socialsContainer = document.querySelector('.card__info__avatar__socials');

shareBtn.onclick = function() {
  shareBtn.classList.toggle('active');
  socialsContainer.classList.toggle('flex');
}

window.addEventListener('click', function(e) {
  if (e.target !== shareBtn && shareBtn.classList.contains('active')) {
    shareBtn.classList.toggle('active');
    socialsContainer.classList.toggle('flex');
  }
});