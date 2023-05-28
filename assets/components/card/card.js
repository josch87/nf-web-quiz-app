const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const answerSection = document.querySelector('[data-js="answerSection"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark--flagged");
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
  } else if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  }

  if (answerButton.classList.contains("button--show-answer")) {
    answerButton.classList.remove("button--show-answer");
    answerButton.classList.add("button--hide-answer");
  } else if (answerButton.classList.contains("button--hide-answer")) {
    answerButton.classList.remove("button--hide-answer");
    answerButton.classList.add("button--show-answer");
  }

  answerSection.toggleAttribute("hidden");
});
