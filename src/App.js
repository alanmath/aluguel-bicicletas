import React from "react";
import LocationInput from "./LocationInput";
import ListagemAlugueis from "./ListagemAlugueis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirmacao from "./Confirmacao";
import Devolucao from "./Devolucao";

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cadastro-aluguel" element={<LocationInput />} />  
      <Route path="/listagem-aluguel" element={<ListagemAlugueis />} />
      <Route path="/confirmacao" element={<Confirmacao/>} />
      <Route path = "/devolucao/86e875e-f756-4fb2-8501-6cedca8a492d" element = {<Devolucao/>} />
      
      
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
