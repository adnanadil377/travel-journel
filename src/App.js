import React from "react";
import "./Style.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const trip = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section>{trip}</section>
    </div>
  );
}

export default App;
