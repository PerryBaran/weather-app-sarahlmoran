import axios from "axios";

const getForecast = async (
  searchText,
  setSelectedDate,
  setForecasts,
  setLocation
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  const response = await axios.get(endpoint);
  setSelectedDate(response.data.forecasts[0].date);
  setForecasts(response.data.forecasts);
  setLocation(response.data.location);
};

export default getForecast;
