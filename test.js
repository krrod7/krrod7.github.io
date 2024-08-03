document.querySelector('.hamburger').addEventListener('click', () => {
  console.log("click");
  console.log(document.querySelector('.nav-links'));
  document.querySelector('.nav-links').classList.toggle('active');
});
