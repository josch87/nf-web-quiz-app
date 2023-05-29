const head = document.querySelector("head");
const selectTheme = document.querySelector('[data-js="selectTheme"]');
const colorThemeStylesheet = document.querySelector(
  '[data-js="colorThemeStylesheet"]'
);

function changeColorThemeStylesheet(url) {
  colorThemeStylesheet.setAttribute("href", url);
}

function insertCustomStyle() {
  const internalStyle = document.createElement("style");
  internalStyle.innerHTML = currentTheme;
  head.append(internalStyle);
}

selectTheme.addEventListener("input", () => {
  const selectedTheme = selectTheme.value;

  if (selectedTheme === "os-default") {
    changeColorThemeStylesheet("/assets/os-default-theme.css");
  } else if (selectedTheme === "light") {
    changeColorThemeStylesheet("/assets/light-theme.css");
  } else if (selectedTheme === "dark") {
    changeColorThemeStylesheet("/assets/dark-theme.css");
  }
});

const showUserProfileModalButton = document.querySelector(
  '[data-js="showUserProfileModalButton"]'
);
const editUserProfileModal = document.querySelector(
  '[data-js="editUserProfileModal"]'
);

showUserProfileModalButton.addEventListener("click", () => {
  editUserProfileModal.showModal();
});

const userProfileForm = document.querySelector('[data-js="userProfileForm"]');
