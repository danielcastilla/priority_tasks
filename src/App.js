import React, { Component } from "react";
//import ListElements from './components/ListElements.js'

class App extends Component{
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tasks" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tasks"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<TasksList/>} />
            <Route path="/tasks" element={<TasksList/>} />
            <Route path="/add" element={<AddTask/>} />
            <Route path="/tasks/:id" element={<Task/>} />
          </Routes>
        </div>
      </div>

    );
  }
}


export default App;
