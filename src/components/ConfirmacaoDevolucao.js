import React from "react";
import '../css/confirmacao.css'
import styles from "../css/confirmacao.css"; 

function ConfirmacaoDevolucao(props) {
  

  return (
   <div>
    <div className={styles.container}>
        
        <header className={styles.header_2}>
        <nav>
    <ul className={styles.tab}>
    <li>
        <a href="listagem-aluguel">Listagem de aluguéis</a>
    </li>
    
    </ul>
    </nav>
    <div className={styles.logo}>
    <h1></h1>
    </div>
  
    </header>
    </div>
    <div className="confirmado" >
      <h1>Bike devolvida com sucesso!</h1>
      <p>Modelo da bike: {props.dado.modeloBike}</p>
      <p>Origem: {props.dado.origem}</p>
      <p>Data: {props.dado.diaHoraInicio}</p>
      <p>Preço por hora: R$ {props.dado.precoPHora}</p>
      <p>Status: {props.dado.status}</p>
      <p>Destino: {props.dado.destino}</p>
      <p>Distância: {props.dado.distancia} km</p>
      <p>Preço total:R$ {props.dado.preco}</p>
      <p>Tempo de viagem: {props.dado.tempoDeViagem} h</p>

    </div>
   

    </div>
  );
}

export default ConfirmacaoDevolucao;