var exercerButton = document.querySelector(".button-train");
var exercerPopUp = document.querySelector(".train-popup");
var exercerCroix = document.querySelector(".train-img-croix");

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

// test

var checkAllTrigger = document.querySelector(".check-all");
var checkboxes = document.querySelectorAll(".button-coche");
var uncheckAllTrigger = document.querySelector(".uncheck-all");

var checkAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
};

checkAllTrigger.addEventListener("click", checkAll);

var uncheckAll = function () {
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

uncheckAllTrigger.addEventListener("click", uncheckAll);
