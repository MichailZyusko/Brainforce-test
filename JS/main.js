import { click } from "./click.js";
import { consultant } from "./consultation.js";
import { nameValidation, phoneValidation } from "./validation.js";

const mask = [];

function phoneOnFocus() {
  let phoneInput = document.getElementById("phoneInput");
  if (phoneInput.value === "") {
    phoneInput.value = "+375(XX)XX-XX-XX";
  }
}

function phoneOnKeyDown(event) {
  // let phoneInput = document.getElementById("phoneInput");
  // if (event.code.includes("Digit")) {
  //   // если это цифра
  // }
}

function phoneOnKeyUp(event) {
  // this.value = this.value.replace(/[^\d]/g, "");
  // let phoneInput = document.getElementById("phoneInput");
  // if (!event.code.includes("Digit")) {
  //   phoneInput.value = phoneInput.value.slice(0, -1);
  // }
}

document.addEventListener("click", function (e) {
  const target = e.path[0];
  if (target.className !== "picture") return;
  click(target);
});

consultation.addEventListener("click", consultant);
nameInput.addEventListener("input", nameValidation);
phoneInput.addEventListener("input", phoneValidation);
phoneInput.addEventListener("focus", phoneOnFocus);
phoneInput.addEventListener("keydown", phoneOnKeyDown);
phoneInput.addEventListener("keyup", phoneOnKeyUp);
