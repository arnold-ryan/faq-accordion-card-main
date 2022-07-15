const textBoxes = document.querySelectorAll(".faq--text");
textBoxes.forEach((textBox) => {
  textBox.addEventListener("click", () => {
    textBox.classList.toggle("active");
  });
});
