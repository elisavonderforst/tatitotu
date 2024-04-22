var exercerButton = document.querySelector(".button-exercer");
var exercerPopUp = document.querySelector(".exercer-popup");
var exercerCroix = document.querySelector(".exercer-img-croix");

var changeButton = function () {
  exercerPopUp.classList.toggle("is-visible");
};

exercerButton.addEventListener("click", changeButton);

var changeCroix = function () {
  exercerPopUp.classList.remove("is-visible");
  exercerPopUp.classList.remove("is-highlight");
};

exercerCroix.addEventListener("click", changeCroix);

var changeBackground = function () {
  exercerPopUp.classList.toggle("is-highlight");
};

exercerButton.addEventListener("click", changeBackground);
