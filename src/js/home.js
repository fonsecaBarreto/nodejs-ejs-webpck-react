import "../css/test.css"
import React, { useState } from "react";
import { render } from "react-dom";
import Teste from './teste'
import bg from '../assets/bg.jpg'
function App() {
  return (
    <div>
      <h1>Sou a home nnow</h1>
      <img src={bg}></img>
      <Teste></Teste>
    </div>  
  );
}

render(<App />, document.getElementById("app"));