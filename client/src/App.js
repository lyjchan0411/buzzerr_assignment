import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [usersData, setUsersData] = useState();
  const URL = "http://localhost:5000/users";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar usersData={usersData} />
    </div>
  );
}

export default App;
