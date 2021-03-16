const navSlide = () => {
  const toggleButton = document.querySelector(".btn3");
  const navBar = document.querySelector(".color");
  toggleButton.addEventListener("click", () => {
    navBar.classList.toggle(".color-active");
  });
};
navSlide();
