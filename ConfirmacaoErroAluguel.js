import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import Map from "./Map";


function ConfirmacaoAluguel() {


  return (
    
    <div>
      <div>
        <h1>LISTAGEM DE CADASTROS</h1>
      </div>
      
     
      <div>
        <button onClick={() => fetch("http://localhost:8080", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"lat": currentPosition['lat'], "lng": currentPosition['long'], "local": document.getElementById("location-input").value})
        }).then(response => response.json()).then(data => console.log(data))
        .then(alert("Localização enviada com sucesso!"))
        .catch(error => console.log(error))
        
        
        }> manda! </button>
      </div>
      <Map currentPosition={currentPosition} markerPosition={markerPosition} />
    </div>
  );
}

export default LocationInput;