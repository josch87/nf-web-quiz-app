function registerServiceWorker() {
  navigator.serviceWorker.register("/serviceworker.js");
}

if ("serviceWorker" in navigator) {
  registerServiceWorker();
}

const header = document.querySelector('[data-js="header"]');

function showInAppInstallPromotion() {
  const installPromotion = document.createElement("div");
  installPromotion.classList.add("install_promotion");
  installPromotion.innerHTML = `
  <p class="install_promotion__text">
    Get a new experience and install the Quiz App on your device!
  </p>
  <button type="button" class="button" data-js="installPwaButton">Install</button>
  `;
  header.after(installPromotion);
}

function listenToInstallButton() {
  const installPwaButton = document.querySelector(
    '[data-js="installPwaButton"]'
  );
  installPwaButton.addEventListener("click", () => {
    deferredPrompt.prompt();
    console.log("test");
  });
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInAppInstallPromotion();
  listenToInstallButton();
});
