import cloudy from "./assets/animated/cloudy.svg";
import rainy from "./assets/animated/rainy-7.svg";
import snowy from "./assets/animated/snowy-6.svg";
import thundery from "./assets/animated/thunder.svg";
import sunny from "./assets/animated/day.svg"

export default function createElements(data) {
  const body = document.querySelector("body");
  const wrap = document.createElement('div');

  wrap.classList.add('app-wrapper');
  body.appendChild(wrap);

  const elems = makeElem(data);
  elems.forEach(elem => wrap.append(elem));

  const weather = document.querySelector(".weather");
  weather.classList.add(data.weather);

  printBackground(data.weather)
}

function $(el, text, klass) {
  const elem = document.createElement(el);
  elem.innerText = text;
  elem.classList.add(klass);

  return elem
}

function makeElem(obj, elems = []) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'object') {
      makeElem(obj[prop], elems);
    } else {
      elems.push($('h4', obj[prop], prop))
    }
  }

  return elems
}

function printBackground(weather) {
  const body = document.querySelector("body");
  const img = document.createElement("img");

  img.classList.add("bg-img");

  body.appendChild(img);
  
  switch (weather) {
    case 'Clouds':
      img.src = cloudy;
      img.classList.add('cloudy');
      break;
    case 'Clear':
      img.src = sunny;
      img.classList.add('sunny');
      break;
    case 'Rain':
      img.src = rainy;
      img.classList.add('rainy');
      break;
    case 'Snow':
      img.src = snowy;
      img.classList.add('snowy');
      break;
    default:
      break;
  }
}
