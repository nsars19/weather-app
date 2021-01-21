import "./stylesheets/main.scss";
import fetchData from "./fetchData";
import processData from "./processData";
import createElements from "./createElements";

function fetchAndCreate(location = "Boston") {
  fetchData(location)
    .then((data) => processData(data))
    .then((data) => createElements(data))
    .catch((err) => handleError(err))
}

function handleError(err) {
  console.log(err)
  const body = document.querySelector("body");
  const msg = document.createElement("h2");

  msg.innerText = "I couldn't find that place, sorry!";

  msg.classList.add("app-wrapper");
  msg.classList.add("error-text");

  body.appendChild(msg);
}

function clearCurrent() {
  const wrapper = document.querySelectorAll(".app-wrapper");
  const img = document.querySelectorAll(".bg-img");

  if ([...img].length > 0) {
    [...img].forEach((image) => image.remove());
  }

  if ([...wrapper].length > 0) {
    while (wrapper.firstChild) {
      wrapper.firstChild.remove();
    }

    [...wrapper].forEach((wrap) => wrap.remove());
  }
}

(function app() {
  const btn = document.querySelector(".search-submit");
  const q = document.querySelector(".search");

  btn.addEventListener("click", () => {
    const qArg = q.value || "Boston";

    clearCurrent();

    fetchAndCreate(qArg);
  });
})();
