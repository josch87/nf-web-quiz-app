const bookmarkIcon = document.querySelector('[data-js="bookmarkIcon"');

function toggleBookmarkIcon() {
  bookmarkIcon.classList.toggle("card__bookmark--flagged");
}

bookmarkIcon.addEventListener("click", () => {
  toggleBookmarkIcon();
});
