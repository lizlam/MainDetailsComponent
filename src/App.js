import React from "react";
import MainDetails from "./MainDetails";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Main/Details Component</h1>
      <h2>Testing Main Details Component</h2>
      <MainDetails
        main={<div>This is the main area.</div>}
        details={<div>These are details.</div>}
      />
    </div>
  );
}
