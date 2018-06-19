// Slider

var utils = window.fizzyUIUtils;

var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
  imagesLoaded: true,
  wrapAround: true,
  selectedAttraction: 1,
  friction: 1,
  setGallerySize: false,
  draggable: false,
  prevNextButtons: false,
  pageDots: false
});

// elements
var cellsButtonGroup = document.querySelector('.button-group--cells');
var cellsButtons = utils.makeArray(cellsButtonGroup.children);

// update buttons on select
flkty.on('select', function() {
  var previousSelectedButton = cellsButtonGroup.querySelector('.is-selected');
  var selectedButton = cellsButtonGroup.children[flkty.selectedIndex];
  previousSelectedButton.classList.remove('is-selected');
  selectedButton.classList.add('is-selected');
});

// cell select
cellsButtonGroup.addEventListener('click', function(event) {
  if (!matchesSelector(event.target, '.button')) {
    return;
  }
  var index = cellsButtons.indexOf(event.target);
  flkty.select(index);
});
// previous
var previousButton = document.querySelector('.button--previous');
previousButton.addEventListener('click', function() {
  flkty.previous();
});
// next
var nextButton = document.querySelector('.button--next');
nextButton.addEventListener('click', function() {
  flkty.next();
});

window.addEventListener( 'load', function() {
  flkty.resize();
});

// modal

var modal = document.getElementById("custom_modal");
var auto = document.getElementById("popup_btn");
var btn = document.getElementById("popup_btn");
var close_btn = document.getElementsByClassName("close_btn")[0];

btn.onclick = function() {
  modal.style.display = "block";
  auto.style.display = "none";
};

close_btn.onclick = function() {
  modal.style.display = "none";
  auto.style.display = "block";
};

window.load = function(event) {
  modal.style.display = "none";
  auto.style.display = "block";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    auto.style.display = "block";
  }
};
