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

  const newCard = document.createElement("section");
  newCard.classList.add("card");
  questionForm.append(newCard);

  const newArticle = document.createElement("article");
  newArticle.classList.add("card__content");
  newCard.append(newArticle);

  const newBookmarkIcon = document.createElement("img");
  newBookmarkIcon.classList.add("card__bookmark");
  newBookmarkIcon.setAttribute("src", "/assets/icons/bookmark-solid.svg");
  newBookmarkIcon.setAttribute("data-js", "bookmarkIcon");

  const newQuestion = document.createElement("h2");
  newQuestion.classList.add("card__question");
  newQuestion.textContent = data.question;

  const newButton = document.createElement("button");
  newButton.classList.add("button", "button--hide-answer");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("data-js", "answerButton");
  newButton.textContent = "Hide Answer";

  const newAnswerSection = document.createElement("section");
  newAnswerSection.classList.add("card__answer");
  newAnswerSection.setAttribute("data-js", "answerSection");

  const newAnswerParagraph = document.createElement("p");
  newAnswerParagraph.textContent = data.answer;
  newAnswerSection.append(newAnswerParagraph);

  newArticle.append(newBookmarkIcon, newQuestion, newButton, newAnswerSection);

  const newCardTags = document.createElement("ul");
  newCardTags.classList.add("card__tags");
  newCard.append(newCardTags);

  const newCardTagItem = document.createElement("li");
  newCardTagItem.classList.add("card__tag-item");
  newCardTagItem.textContent = "#" + data.tag;
  newCardTags.append(newCardTagItem);
});

/*
<section class="card">                                        newCard
        <article class="card__content">                       newArticle
          <img                                                newBookmarkIcon
            class="card__bookmark"
            src="/assets/icons/bookmark-solid.svg"
            data-js="bookmarkIcon"
          />
          <h2 class="card__question">                         newQuestion
            What property flips the axes in flexbox?
          </h2>


          <button                                             newButton
            class="button button--show-answer"
            type="button"
            data-js="answerButton"
          ></button>
          <section class="card__answer" data-js="answerSection" hidden>      newAnswerSection 
            <p>flex-direction</p>                                           newAnswerParagraph
          </section>
        </article>
        <ul class="card__tags">                                             newCardTags
          <li class="card__tag-item">#html</li>                           newCardTagItem
          <li class="card__tag-item">#flexbox</li>
          <li class="card__tag-item">#css</li>
        </ul>
      </section>
      */
