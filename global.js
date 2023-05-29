function registerServiceWorker() {
  console.log("registered");
  navigator.serviceWorker.register("/serviceworker.js");
}

if ("serviceWorker" in navigator) {
  console.log("check");
  registerServiceWorker();
}
