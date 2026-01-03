const list = document.getElementById("menu");
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      return;
    }
    const items = e.target.parentElement.children;
    for (let item of items) {
      item.classList.remove("selected");
    }
    e.target.classList.add("selected");
  }
});

