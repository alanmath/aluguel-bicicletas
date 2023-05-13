import React from "react";
import './confirmacao.css'
function Confirmacao(props) {
  

  return (
    <div className="confirmado" >
      <h1>Cadastro realizado com sucesso!</h1>
      <p>Origem: {props.dado.origem}</p>
      <p>Data: {props.dado.diaHoraInicio}</p>
      <p>Preço por hora: {props.dado.precoPHora}</p>
      <p>Status: {props.dado.status}</p>
    </div>
  );
}

export default Confirmacao;