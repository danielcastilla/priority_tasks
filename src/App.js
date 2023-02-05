import React, { useState, useEffect } from "react";
import task from "./api/model/task";
import "./App.css";


function App() {
  const [data, setData] = useState("");
  const tasks = [];
  
  useEffect(() => {
    fetch("http://localhost:8080/api/tasks")
      .then((response) => response.json())
      .then((data) => setData(data));

    }, []);

  return (
    <div className="App">
      <h1>APP</h1>
      {tasks.map(task => <li>{task}</li>)}
            <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App