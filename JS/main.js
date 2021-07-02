import { click } from "./click.js";
import { consultant } from "./consultation.js";
import { nameValidation, phoneValidation } from "./validation.js";

function phoneOnFocus() {
  let phoneInput = document.getElementById("phoneInput");
  if (phoneInput.value === "") {
    phoneInput.value = "+375(XX)XX-XX-XX";
  }
}

// function phoneOnKeyDown(event) {
//   // let phoneInput = document.getElementById("phoneInput");
//   // if (event.code.includes("Digit")) {
//   //   // если это цифра
//   // }
// }

// function phoneOnKeyUp(event) {
//   // this.value = this.value.replace(/[^\d]/g, "");
//   // let phoneInput = document.getElementById("phoneInput");
//   // if (!event.code.includes("Digit")) {
//   //   phoneInput.value = phoneInput.value.slice(0, -1);
//   // }
// }

document.addEventListener("click", function (e) {
  const target = e.path[0];
  if (target.className !== "picture") return;
  click(target);
});

consultation.addEventListener("click", consultant);
nameInput.addEventListener("input", nameValidation);
phoneInput.addEventListener("input", phoneValidation);
phoneInput.addEventListener("focus", phoneOnFocus);

button.addEventListener("click", function () {
  document.getElementById("myModal").style.visibility = "hidden";
  document.getElementById("labelforName").style.visibility = "hidden";
  document.getElementById("labelforPhone").style.visibility = "hidden";
  document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
    "hidden";

  document.getElementById("pop_up").style.display = "flex";

  setTimeout(function () {
    alert("gg");
    // document.getElementById("pop_up").style.display = "none";
    // document.getElementsByTagName("html")[0].style.overflow = "scroll";
  }, 30000);
});
// phoneInput.addEventListener("keydown", phoneOnKeyDown);
// phoneInput.addEventListener("keyup", phoneOnKeyUp);
