const input = document.querySelector(".pageviews__slider");
const billingButton = document.querySelector(".billing__button");
actualizarInput(input);

input.addEventListener(
  "input",
  function (evt) {
    actualizarInput(input);
  },
  false
);

function actualizarInput(input) {
  input.style.setProperty("--value", input.value);
}

billingButton.addEventListener("click", (e) => {
  e.target.classList.toggle("billing__button--active");
});
