//app es un componente//app
import React from 'react';
import Card from ":/components/Card";
import barbados from "./barbados_beach.jpg";
import palenque from "./palenque.jpg";
import './App.css';

const App = () => {
  const a = "chiapas";
  const b = "5";
  const c = "palenque";
  //JSK => implementacion a JS
  return (
    <div>
      <h1 className="text-red">hola React</h1>
      <h2>mi primer sitio hecho con react</h2>
      <Card image={barbados} title="barbados" score="3" address="playa de barbados"/>
      <Card image={barbados} title={a} score={b} address={c} superhost/>
    </div>
  );
}

export default App;
