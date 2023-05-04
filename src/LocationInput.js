import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import Map from "./Map";

const libraries = ["places"];
const center = {
  lat: -23.5505,
  lng: -46.6333,
};

function LocationInput() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCcH4-0pw0iu4qyDZz9MtlQnq7x0l4kBbg",
    libraries,
  });

  const [currentPosition, setCurrentPosition] = useState(center);
  const [markerPosition, setMarkerPosition] = useState(null); // Adicione esta linha
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => console.log("Erro ao obter localização: " + error.message)
      );
    } else {
      alert("Seu navegador não suporta geolocalização.");
    }
  }, []);

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setCurrentPosition({ lat: lat(), lng: lng() });
        setMarkerPosition({ lat: lat(), lng: lng() }); // Adicione esta linha
      }
    }
  };

  if (loadError) return "Erro ao carregar mapas";
  if (!isLoaded) return "Carregando mapas";

  return (
    
    <div>
      <div>
        <h1>TELA DE CADASTRO - DIGA SUA LOCALIZACAO</h1>
      </div>
      
      <div>
        <Autocomplete
          onLoad={(auto) => setAutocomplete(auto)}
          onPlaceChanged={onPlaceChanged}
          fields={["geometry.location", "place_id"]}
        >
          <input
            id="location-input"
            type="text"
            placeholder="Digite sua localização"
            style={{ width: "80%", padding: "10px" }}
          />
        </Autocomplete>
      </div>
      <div>
        <button onClick={() => fetch("http://localhost:8080", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({"lat": currentPosition['lat'], "lng": currentPosition['long'], "local": document.getElementById("location-input").value})
        })}> manda! </button>
      </div>
      <Map currentPosition={currentPosition} markerPosition={markerPosition} />
    </div>
  );
}

export default LocationInput;
