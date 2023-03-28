import React from "react";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        Date: {new Date(forecast.date).toDateString()}
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}
      </div>
      <div className="forecast-details__mintemperature">
        Min: {forecast.temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__maxtemperature">
        Max: {forecast.temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__windspeed">
        Wind Speed: {forecast.wind.speed}
      </div>
      <div className="forecast-details__winddirection">
        Wind Direction: {forecast.wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
