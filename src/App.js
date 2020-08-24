import React from "react";
import MainDetails from "./MainDetails";
import "./styles.css";

export default function App() {
  const mainContent = (
    <div>
      <br />
      This is the main area.
    </div>
  );

  const details = (
    <div>
      <br />
      These are details.
    </div>
  );
  return (
    <div className="App">
      <h1>Main/Details Component</h1>
      <h2>A Simple Test</h2>
      <MainDetails main={mainContent} details={details} />
    </div>
  );
}
