import React, { useState, useEffect } from "react";
import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import Map from "./Map";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../css/LocationInput.module.css"; 
import { useNavigate } from 'react-router-dom';
import Confirmacao from "../components/Confirmacao.js";
import { style } from "@mui/system";
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
  const  [dados, setDados] = useState([]);



  function cadastrar(origem, coordenadas){

   
    if  (origem == '' || coordenadas == ''){
      alert('Campos inválidos, pode ser que você não preencheu todos os campos ou não selecionou sua localização no mapa.')
    }
    else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "coordInicial":coordenadas, "origem":origem })
    };
    fetch('http://localhost:8080/aluguel', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if (data.modelo === null) {
        alert('Não há bicicletas disponíveis no momento.');
      } else {
        setDados(data);
    }})
    }
  }


    
    
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




  if (dados.length ==  0){

    return(

  <div className={styles.container}>
        <header className={styles.header_2}>
  <div className={styles.logo}>
    <h1></h1>
  </div>
  <nav>
    <ul className={styles.tab}>
      <li>
        <a href="listagem-aluguel">Listagem de aluguéis</a>
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
        onClick={() => cadastrar( document.getElementById("location-input").value, [currentPosition.lat,currentPosition.lng])}
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
)}
else{
  return(

    <div className="aluguel-confirmado" >
      <Confirmacao dado = {dados} ></Confirmacao>
    </div>

  )



      } }
export default LocationInput;