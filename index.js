import App from "./components/App/App.js";

function render() {
  const body = document.querySelector(body);

  body.append(App());
}
