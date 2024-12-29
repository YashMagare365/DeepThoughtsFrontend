import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
import data from "./assets/data.json";
import Header from "./Components/Header";
import Page1 from "./Components/Page1";

function App() {
  // console.log("Data==>", data.tasks);

  return (
    <div>
      <Header />
      <Page1 />
    </div>
  );
}

export default App;
