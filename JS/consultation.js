export function consultant() {
  if (document.getElementById("myModal").style.visibility !== " visible") {
    // Смотрим активно ли сейчас окно
    let phoneInput = document.getElementById("phoneInput");
    let nameInput = document.getElementById("nameInput");
    let captionForName = document.getElementById("labelforName");
    let captionForPhone = document.getElementById("labelforPhone");

    // обнуляем все значения
    captionForName.style.visibility = "hidden";
    captionForPhone.style.visibility = "hidden";
    nameInput.style.borderColor = "#b4b4b4";
    phoneInput.style.borderColor = "#b4b4b4";
    nameInput.value = "";
    phoneInput.value = "";

    document.getElementById("myModal").style.visibility = "visible"; // Если окно не было открыто, то открываем его
    document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
      "visible";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";

    document.addEventListener("click", function (e) {
      // Если кликнули на тень вокруг окна чтобы скрыть его
      const wrap = e.target.classList.contains("hystmodal__wrap");
      if (!wrap) return;
      document.getElementById("myModal").style.visibility = "hidden";
      document.getElementById("labelforName").style.visibility = "hidden";
      document.getElementById("labelforPhone").style.visibility = "hidden";
      document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
        "hidden";
      document.getElementsByTagName("html")[0].style.overflow = "auto";
    });
  }
}
