const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"');
const answerButton = document.querySelector('[data-js="answerButton"');
const answerSection = document.querySelector('[data-js="answerSection"');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark--flagged");
});

answerButton.addEventListener("click", () => {
  answerButton.classList.toggle("button--show-answer");

  console.log(answerButton.getAttribute("hidden"));

  //   if (answerButton.textContent === "Show Answer") {
  //     answerButton.textContent = "Hide Answer";
  //   } else {
  //     answerButton.textContent = "Show Answer";
  //   }

  //   answerButton.classList === "button--show-answer"
  //     ? (answerButton.textContent = "Show Answer")
  //     : (answerButton.textContent = "Hide Answer");

  answerSection.toggleAttribute("hidden");
});
