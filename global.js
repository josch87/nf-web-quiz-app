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
  installPromotion.setAttribute("data-js", "installPromotion");
  installPromotion.innerHTML = `
  <p class="install_promotion__text">
    Get a new experience and install the Quiz App on your device!
  </p>
  <button type="button" class="button" data-js="installPwaButton">Install</button>
  `;
  header.after(installPromotion);
}

function hideInAppInstallPromotion() {
  const installPromotion = document.querySelector(
    '[data-js="installPromotion"]'
  );

  installPromotion.remove();
}

function listenToInstallButton() {
  const installPwaButton = document.querySelector(
    '[data-js="installPwaButton"]'
  );

  installPwaButton.addEventListener("click", async () => {
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    deferredPrompt = null;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt.");
      hideInAppInstallPromotion();
    } else if (outcome === "dismissed") {
      console.log("User dismissed the install prompt");
    }
    hideInAppInstallPromotion();
  });
}

let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInAppInstallPromotion();
  listenToInstallButton();
});
