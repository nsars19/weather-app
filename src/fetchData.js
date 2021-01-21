export default async function fetchData(location = "Boston") {
  const key = "&appid=0ef688ca35703421279c3bde4d9ca4e6";
  const query = "q=" + location;
  const units = "&units=imperial"
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
  const fullURL = baseUrl + query + units + key;

  const response = await fetch(fullURL, { mode: "cors" });
  const data = await response.json();

  return data;
};
