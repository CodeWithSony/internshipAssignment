import React from "react";



import {BrowserRouter as Router} from "react-router-dom";
import Alroutes from './Alroutes'


function App() {


  return (
    <div className="App">
      <Router>

       <Alroutes/>
      </Router>
    </div>
  );
}

export default App;