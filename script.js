const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const button = card.querySelector(".card-btn");
  const paragraph = card.querySelector("p");

  button.addEventListener("click", () => {
    paragraph.classList.toggle("hidden-text");
    card.classList.toggle("hidden-card");
    card.classList.toggle("open-card");

    if (button.textContent.trim() === "+") {
      button.textContent = "−";
    } else {
      button.textContent = "+";
    }
  });
});