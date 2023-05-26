const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"');
const answerButton = document.querySelector('[data-js="answerButton"');
const answerSection = document.querySelector('[data-js="answerSection"');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.classList.toggle("card__bookmark--flagged");
});

answerButton.textContent = "Show Answer";

answerButton.addEventListener("click", () => {
  //answerButton.classList.toggle("button--show-answer");

  console.log("hidden: " + answerButton.getAttribute("hidden"));

  if (answerButton.textContent === "Show Answer") {
    answerButton.textContent = "Hide Answer";
  } else if (answerButton.textContent === "Hide Answer") {
    answerButton.textContent = "Show Answer";
  }

  if (answerButton.classList === "button--show-answer") {
    answerButton.classList.add("button--hide-answer");
  } else if (answerButton.classList === "button---hide-answer") {
    answerButton.classList.remove("button--show-answer");
  }

  console.log(answerButton.className);

  //   answerButton.classList === "button--show-answer"
  //     ? (answerButton.textContent = "Show Answer")
  //     : (answerButton.textContent = "Hide Answer");

  answerSection.toggleAttribute("hidden");
});
