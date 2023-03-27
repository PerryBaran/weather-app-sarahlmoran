import React from "react";

function ForecastDetails(props) {
  const { date, humidity, temperature, wind } = props;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">Date: {formattedDate}</div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__mintemperature">
        Min: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__maxtemperature">
        Max: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__windspeed">
        Wind Speed: {wind.speed}
      </div>
      <div className="forecast-details__winddirection">
        Wind Direction: {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
