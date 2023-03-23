import "../styles/App.css";
import React from "react";
import LocationDetails from "./locationDetails";

function App(props) {
  return (
    <div className="App">
      <LocationDetails
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        city={props.location.city}
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        country={props.location.country}
      />
    </div>
  );
}

export default App;
