import React from "react";
import './confirmacao.css'
import styles from "./LocationInput.module.css"; 

function Confirmacao(props) {
  

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
      <h1>Cadastro realizado com sucesso!</h1>
      <p>Origem: {props.dado.origem}</p>
      <p>Data: {props.dado.diaHoraInicio}</p>
      <p>Preço por hora: {props.dado.precoPHora}</p>
      <p>Status: {props.dado.status}</p>
    </div>
   

    </div>
  );
}

export default Confirmacao;