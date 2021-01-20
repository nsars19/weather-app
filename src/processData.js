export default function processData(data) {
  const info = {
    name: data.name,
    weather: data.weather[0].main,
    main: {
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      humidity: data.main.humidity,
    },
    wind: data.wind.speed
  };
  
  return info;
};
