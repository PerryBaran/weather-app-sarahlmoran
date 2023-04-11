import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 11111111,
    humidity: 30,
    temperature: {
      min: 12,
      max: 22,
    },
    wind: {
      speed: 13,
      direction: "s",
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Date: Thu Jan 01 1970")).toHaveClass(
      "forecast-details__date"
    );
    expect(getByText("Humidity: 30")).toHaveClass("forecast-details__humidity");
    expect(getByText("Min: 12°C")).toHaveClass(
      "forecast-details__mintemperature"
    );
    expect(getByText("Max: 22°C")).toHaveClass(
      "forecast-details__maxtemperature"
    );
    expect(getByText("Wind Speed: 13")).toHaveClass(
      "forecast-details__windspeed"
    );
    expect(getByText("Wind Direction: s")).toHaveClass(
      "forecast-details__winddirection"
    );
  });
});
