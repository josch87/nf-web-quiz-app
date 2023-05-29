function registerServiceWorker() {
  navigator.serviceWorker.register("/serviceworker.js");
}

if ("serviceWorker" in navigator) {
  registerServiceWorker();
}
