export function consultant() {
  if (document.getElementById("myModal").style.visibility !== " visible") {
    document.getElementById("myModal").style.visibility = "visible";
    document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
      "visible";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";

    document.addEventListener("click", function (e) {
      const wrap = e.target.classList.contains("hystmodal__wrap");
      if (!wrap) return;
      document.getElementById("myModal").style.visibility = "hidden";
      document.getElementById("labelforName").style.visibility = "hidden";
      document.getElementById("labelforPhone").style.visibility = "hidden";
      document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
        "hidden";
      document.getElementsByTagName("html")[0].style.overflow = "scroll";
    });
  } else {
    document.getElementById("myModal").style.visibility = "hidden";
    document.getElementsByClassName("hystmodal__shadow")[0].style.visibility =
      "hidden";
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
  }
}
