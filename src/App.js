import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import data from "./assets/data.json";

function App() {
  // const [data, setdata] = useState({});
  // console.log("Data==>", data);

  useEffect(() => {
    const getJson = () => {
      axios
        .get(
          "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json"
        )
        .then((response) => {
          console.log("DATA==>", response);
        });
    };
    getJson();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>abcd</div>
      </header>
    </div>
  );
}

export default App;
