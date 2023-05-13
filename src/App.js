import React from "react";
import LocationInput from "./LocationInput";
import ListagemAlugueis from "./ListagemAlugueis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Confirmacao from "./Confirmacao";


function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cadastro-aluguel" element={<LocationInput />} />  
      <Route path="/listagem-aluguel" element={<ListagemAlugueis />} />
      <Route path="/confirmacao" element={<Confirmacao/>} />
      
      
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
