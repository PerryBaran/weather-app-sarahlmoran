import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails
        date={forecasts[0].date}
        humidity={forecasts[0].humidity}
        temperature={forecasts[0].temperature}
        wind={forecasts[0].wind}
      />
    </div>
  );
}

export default App;
