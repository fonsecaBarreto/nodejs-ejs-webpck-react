const { Component } = require("react")
import React from 'react';
import "./style.css"
import CallButton from "../../../components/utils/callbutton"
export default class HomeHeadLine extends Component{

  render(){
    return (

      <a target="__blank" href="https://www.asaas.com/c/994473463914" >
    
      <div id="headline-banner" className="bd-blue">
    
        <div className="button-div">

          <CallButton width="250px" > COMECE AGORA</CallButton>
        </div>

      </div> 
    </a>
    
    )
  }
}
