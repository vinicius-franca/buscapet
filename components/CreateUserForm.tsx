"use client";
import React, { useState } from 'react';

function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bairro: '',
    rua: '',
    password: '', // Corrigi o typo em "passsowrd"
    cidade: '',
    uf: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/createUser', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data); // Trate a resposta conforme necessário
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
      <input className="block w-full p-2 mb-2 border rounded" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
      <input className="block w-full p-2 mb-2 border rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
      <input className="block w-full p-2 mb-2 border rounded" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
      <input className="block w-full p-2 mb-2 border rounded" type="text" name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" />
      <input className="block w-full p-2 mb-2 border rounded" type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" />
      <input className="block w-full p-2 mb-2 border rounded" type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Cidade" />
      <input className="block w-full p-2 mb-2 border rounded" type="text" name="uf" value={formData.uf} onChange={handleChange} placeholder="Estado" />
      <button className="block w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Criar Usuário</button>
    </form>
  );
}

export default CreateUserForm;