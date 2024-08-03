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

document.querySelector('.hamburger').addEventListener('click', () => {
  console.log("click");
  console.log(document.querySelector('.nav-links'));
  document.querySelector('.nav-links').classList.toggle('active');
});

window.addEventListener("DOMContentLoaded", loadColor);
