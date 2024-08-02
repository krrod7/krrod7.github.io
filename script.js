function setColor(color) {
  const switchColors = document.querySelectorAll(".switch");

  switchColors.forEach((matchColor) => {
    if (color === matchColor.getAttribute("title")) {
      matchColor.removeAttribute("disabled");
    } else {
      matchColor.setAttribute("disabled", "true")
    }
  })
  localStorage.setItem("preferredColor", color);
}

function loadColor() {
  const savedColor = localStorage.getItem("preferredColor");
  if (savedColor) {
    console.log(savedColor);
    setColor(savedColor);
  }
}

window.addEventListener("DOMContentLoaded", loadColor);
