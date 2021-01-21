export default function processData(data) {
  return {
    name: data.name,
    weather: data.weather[0].main,
    main: {
      temp: parseInt(data.main.temp),
      feelsLike: parseInt(data.main.feels_like),
      humidity: parseInt(data.main.humidity),
    },
    wind: data.wind.speed
  };
};
