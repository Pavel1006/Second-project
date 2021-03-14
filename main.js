const toggleButton = document.getElementsByClassName("btn3")[0];
const navBar = document.getElementsByClassName("color")[0];
toggleButton.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
