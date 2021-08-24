import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {

  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;
