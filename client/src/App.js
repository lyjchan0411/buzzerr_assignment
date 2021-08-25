import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="App">
      <Feed />
    </div>
  );
}

export default App;
