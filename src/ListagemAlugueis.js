import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { colors } from '@mui/material';
import Aluguel from './Aluguel';
export default function ListagemAlugueis() {
  const [data, setData] = useState([]);
  let indice = []
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/aluguel');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  function aumenta(){
    console.log(indice)
    indice.push(indice.length)
  }

  


  
  if (data.length > 0){
  return (

    <div style={{ height: 400, width: '100%' }}>
       
            <button onClick= {aumenta} >aumentar 1</button>
         { indice.map(d => <Aluguel key={d.id} aluguel={data[d]} />)}
     
    </div>
  );}
    else{
        return(
            <div>
                <h1> Não há aluguéis cadastrados</h1>
            </div>
        )

}
}