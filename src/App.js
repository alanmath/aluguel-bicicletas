import React from "react";
import LocationInput from "./components/LocationInput";
import ListagemAlugueis from "./components/ListagemAlugueis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirmacao from "./components/Confirmacao";
import Devolucao from "./components/Devolucao";

function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cadastro-aluguel" element={<LocationInput />} />  
      <Route path="/listagem-aluguel" element={<ListagemAlugueis />} />
      <Route path="/confirmacao" element={<Confirmacao/>} />
      <Route path = "/devolucao/:id" element = {<Devolucao/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
