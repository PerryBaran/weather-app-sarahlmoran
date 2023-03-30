import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 11111111,
        description: "Stub description 1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 22222222,
        description: 602,
        icon: "stubIcon2",
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of instances of ForecastSummary", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps.forecasts} />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
