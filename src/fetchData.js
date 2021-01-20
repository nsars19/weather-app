export default async function fetchData(location = "Boston") {
  const key = "&appid=1df08f2992572a6c16ad4183437515d8";
  const query = "q=" + location;
  const units = "&units=imperial"
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const fullURL = baseUrl + query + units + key;

  const response = await fetch(fullURL, { mode: "cors" });
  const data = await response.json();

  return data;
};
