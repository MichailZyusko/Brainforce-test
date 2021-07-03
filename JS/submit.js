export function phoneOnFocus() {
  let phoneInput = document.getElementById("phoneInput");
  if (phoneInput.value === "") {
    phoneInput.style.borderColor = "red";

    captionForPhone.style.color = "red";
    captionForPhone.innerHTML = "Маска: +375 (ХХ) ХХХ-ХХ-ХХ";
  }
}

export function showForm() {
  let phoneInput = document.getElementById("phoneInput");
  let nameInput = document.getElementById("nameInput");

  if (
    phoneInput.style.borderColor === "green" &&
    nameInput.style.borderColor === "green"
  ) {
    document.getElementById("myModal").style.visibility = "hidden";
    document.getElementById("labelforName").style.visibility = "hidden";
    document.getElementById("labelforPhone").style.visibility = "hidden";
    document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
      "hidden";

    document.getElementById("pop_up").style.display = "flex";

    setTimeout(function () {
      document.getElementById("pop_up").style.display = "none";
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    }, 3000);
  } else {
    alert("Все поля должны быть заполнеными корректно");
  }
}
