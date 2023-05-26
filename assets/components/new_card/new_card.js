const inputCounterQuestion = document.querySelector(
  '[data-js="inputCounterQuestion"'
);
const inputCounterAnswer = document.querySelector(
  '[data-js="inputCounterAnswer"'
);
const questionInput = document.querySelector('[data-js="questionInput"');
const answerInput = document.querySelector('[data-js="answerInput"');

function countRemainingInputLength(currentLength, maxLength) {
  const remainingLength = maxLength - currentLength;

  if (remainingLength === 1) {
    return "1 character left";
  }
  return remainingLength + "characters left";
}
