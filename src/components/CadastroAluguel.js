import React, { useState } from 'react';
import axios from 'axios';

const CadastroAluguel = () => {
  const [formData, setFormData] = useState({
    dataInicio: '',
    origem: '',
    destino: '',
    horasViagem: '',
    kmsViagem: '',
    precoTotal: '',
    status: 'CONFIRMADO',
    idBicicleta: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.example.com/alugueis', formData);
      // Redirecionar para a tela de confirmação ou erro
    } catch (error) {
      // Tratar o erro
    }
  };

  return (
    // Renderizar o formulário com os campos necessários e chamar handleSubmit ao enviar
  );
};

export default CadastroAluguel;
