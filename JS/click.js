export function click(target) {
  let children = target.previousElementSibling.children;

  if (children[1].style.display !== "none") {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "none";
      target.src = "../src/more.png";
    }
  } else {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "initial";
      target.src = "../src/close.png";
    }
  }
}
