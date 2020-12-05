import "../index"
import React, { useState } from "react";
import { render } from "react-dom";

import HeadLine from './components/headline'
import Sobre from './components/sobre'
import ComoFunciona from './components/comoFunciona'
import InfoRow from './components/infoRow'
import Depoimentos from './components/depoimentos'
import Partners from './components/partners'
import Proposta from './components/proposta'

function App() {
  return (
    <div>
      <HeadLine></HeadLine>
      <Sobre></Sobre>
      <ComoFunciona></ComoFunciona>
      <InfoRow></InfoRow>
      <Depoimentos></Depoimentos>
      <Partners></Partners>
      <Proposta></Proposta>
    </div>  
  );
}

render(<App />, document.getElementById("app"));