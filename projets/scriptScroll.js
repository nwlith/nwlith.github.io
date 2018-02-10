var gauche = document.getElementById('gauche');
var droite = document.getElementById('droite');
var haut = document.getElementById('haut');
var bas = document.getElementById('bas');

function scrollRight() {
   droite.classList.add('actif');
   gauche.classList.remove('actif');
 };

 function scrollLeft() {
   gauche.classList.add('actif');
   droite.classList.remove('actif');
 };

 function scrollTop() {
   haut.classList.add('actif');
   bas.classList.remove('actif');
 };

 function scrollBottom() {
   bas.classList.add('actif');
   haut.classList.remove('actif');
 };

var ancienScroll = {
  x : window.scrollX,
  y : window.scrollY,
};

function updateAncienScroll() {
  ancienScroll = {
    x : window.scrollX,
    y : window.scrollY,
  };
};

var isScrolling;

window.addEventListener('scroll', function() {
  clearTimeout(isScrolling);
  if (window.scrollX < ancienScroll.x) {
    scrollLeft();
  }
  if (window.scrollX > ancienScroll.x) {
    scrollRight();
  }
  if (window.scrollY < ancienScroll.y) {
    scrollTop();
  }
  if (window.scrollY > ancienScroll.y) {
    scrollBottom();
  }
  updateAncienScroll();
  isScrolling = setTimeout(function() {
    Array.from(document.querySelectorAll('.actif')).forEach(function (image) {
      image.classList.remove('actif');
    });
  }, 66);
});
