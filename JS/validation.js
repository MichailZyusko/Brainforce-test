const MAX_LENGTH = 12;

export function nameValidation() {
  let nameInput = document.getElementById("nameInput");
  let captionForName = document.getElementById("labelforName");
  let string = nameInput.value;

  captionForName.style.visibility = "visible";

  if (string.length > 0) {
    nameInput.style.borderColor = "green";
    if (string.length <= MAX_LENGTH) {
      captionForName.innerHTML = "Осталось " + (MAX_LENGTH - string.length);
      captionForName.style.color = "green";
    } else {
      alert("Достигнута максимальная длинна имени");
      nameInput.value = nameInput.value.slice(0, -1);
    }
  } else {
    nameInput.style.borderColor = "red";

    captionForName.style.color = "red";
    captionForName.innerHTML = "Обязательное поле";
  }
}

export function phoneValidation() {
  let phoneInput = document.getElementById("phoneInput");
  let captionForPhone = document.getElementById("labelforPhone");
  let string = phoneInput.value;

  captionForPhone.style.visibility = "visible";

  if (string.length == 0) {
    phoneInput.style.borderColor = "red";

    captionForPhone.style.color = "red";
    captionForPhone.innerHTML = "Обязательное поле";
  } else if (phoneInput.validity.valid) {
    phoneInput.style.borderColor = "green";

    captionForPhone.style.color = "green";
    captionForPhone.innerHTML = "Приемлимо";
  } else {
    phoneInput.style.borderColor = "red";

    captionForPhone.style.color = "red";
    captionForPhone.innerHTML = "Маска: +375 (ХХ) ХХХ-ХХ-ХХ";
  }
}
