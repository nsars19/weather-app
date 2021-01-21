import "./stylesheets/main.scss";
import fetchData from "./fetchData";
import processData from "./processData";
import createElements from "./createElements";

fetchData()
  .catch(err => console.log(err))
  .then((data) => processData(data))
  .then((data) => createElements(data));
