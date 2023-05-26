const inputCounterQuestion = document.querySelector(
  '[data-js="inputCounterQuestion"]'
);
const inputCounterAnswer = document.querySelector(
  '[data-js="inputCounterAnswer"]'
);
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const questionForm = document.querySelector('[data-js="questionForm"]');

function countRemainingInputLength(currentLength, maxLength) {
  const remainingLength = maxLength - currentLength;

  if (remainingLength === 1) {
    return "1 character left";
  }
  return remainingLength + " characters left";
}

const questionInputMaxLength = 150;
const answerInputMaxLength = 150;
inputCounterQuestion.textContent = countRemainingInputLength(
  0,
  questionInputMaxLength
);
inputCounterAnswer.textContent = countRemainingInputLength(
  0,
  answerInputMaxLength
);

questionInput.setAttribute("maxlength", questionInputMaxLength);
answerInput.setAttribute("maxlength", answerInputMaxLength);

questionInput.addEventListener("input", () => {
  const questionInputLength = Number.parseInt(questionInput.value.length);
  inputCounterQuestion.textContent = countRemainingInputLength(
    questionInputLength,
    questionInputMaxLength
  );
});

answerInput.addEventListener("input", () => {
  const answerInputLength = Number.parseInt(answerInput.value.length);
  inputCounterAnswer.textContent = countRemainingInputLength(
    answerInputLength,
    answerInputMaxLength
  );
});

questionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});
