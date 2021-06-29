export function click() {
  let children = this.previousElementSibling.children;
  console.log(this.previousElementSibling.children);

  if (children[1].style.display !== "none") {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "none";
      this.src = "../src/more.png";
    }
  } else {
    for (let i = 1; i < children.length; i++) {
      children[i].style.display = "initial";
      this.src = "../src/close.png";
    }
  }
}
