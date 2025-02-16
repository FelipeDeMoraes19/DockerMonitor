import React from "react";
import ContainerList from "./components/ContainerList";
import ContainerStats from "./components/ContainerStats";

function App() {
  return (
    <div>
      <h1>Docker Monitor</h1>
      <ContainerList />
      <ContainerStats />
    </div>
  );
}

export default App;
