import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import Map from "./Map";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./LocationInput.module.css"; 

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

    <div className={styles.container}>
          <header className={styles.header_2}>
    <div className={styles.logo}>
      <h1></h1>
    </div>
    <nav>
      <ul className={styles.tab}>
        <li>
          <a href="#">Listagem de aluguéis</a>
        </li>
        <li>
          <a href="#">Devolução de bicicletas</a>
        </li>
      </ul>
    </nav>
  </header>
      <div className={styles.header}>
        <h1>Alugar bicicleta</h1>
      </div>
  
      <div className={styles.input}>
        <Autocomplete
          onLoad={(auto) => setAutocomplete(auto)}
          onPlaceChanged={onPlaceChanged}
          fields={["geometry.location", "place_id"]}
        >
          <TextField
            id="location-input"
            label="Digite sua localização"
            variant="outlined"
            fullWidth
            style={{ marginBottom: "10px" }}
          />
        </Autocomplete>
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={() =>
            fetch("http://localhost:8080/aluguel", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                coordInicial:[currentPosition.lat, currentPosition.lng],
                origem: document.getElementById("location-input").value,
              }),
            })
              .then((response) => response.json())
              .then((response) => {
                console.log(response);
              })
              .catch((error) => console.log(error))
          }
          variant="contained"
          color="primary"
        >
          cadastrar aluguel!
        </Button>
      </div>
      <div className={styles.map}>
        <Map currentPosition={currentPosition} markerPosition={markerPosition} />
      </div>


    </div>
  );
        }  

export default LocationInput;