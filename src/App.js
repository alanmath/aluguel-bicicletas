import React from "react";
import LocationInput from "./LocationInput";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/cadastro-aluguel" element={<LocationInput />} />  
      
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
