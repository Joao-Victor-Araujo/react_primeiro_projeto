import React from "react";
import Titulo from "../titulo/Titulo";
import './Cabecalho.css';

export default function Cabecalho (props){

  return (
      <header>
        <Titulo texto={props.mensagem} />
      </header>
  );
};