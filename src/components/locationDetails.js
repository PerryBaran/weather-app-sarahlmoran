import React from "react";

function LocationDetails(props) {
  // eslint-disable-next-line react/prop-types
  const { city, country } = props;
  return <h1>{`${city},${country}`}</h1>;
}

export default LocationDetails;
