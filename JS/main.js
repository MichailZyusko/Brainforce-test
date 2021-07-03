import { click, moseover, moseout } from "./circleButton.js";
import { consultant } from "./consultation.js";
import { nameValidation, phoneValidation } from "./validation.js";
import { phoneOnFocus, showForm } from "./submit.js";

document.addEventListener("click", function (e) {
  const target = e.path[0];
  if (target.className !== "picture") return;
  click(target);
});

document.addEventListener("mouseover", function (e) {
  const target = e.path[0];
  if (target.className !== "picture") return;
  moseover(target);
});

document.addEventListener("mouseout", function (e) {
  const target = e.path[0];
  if (target.className !== "picture") return;
  moseout(target);
});

consultation.addEventListener("click", consultant);
nameInput.addEventListener("input", nameValidation);
phoneInput.addEventListener("input", phoneValidation);
phoneInput.addEventListener("focus", phoneOnFocus);
button.addEventListener("click", showForm);
