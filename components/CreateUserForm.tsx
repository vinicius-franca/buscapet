"use client";
import React, { useState, useEffect } from 'react';
import { redirect } from 'next/navigation'

function CreateUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bairro: '',
    rua: '',
    password: '',
    cidadeId: 0,
    uf: '',
  });

  const [cidades, setCidades] = useState([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    async function fetchCidades() {
      try {
        const response = await fetch('/api/getCidades');
        const data = await response.json();
        setCidades(data);
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    }

    fetchCidades();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: name === 'cidadeId' ? parseInt(value, 10) : value }));
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
      if(!data.error) {
        setShowSuccessModal(true);
        redirect('/auth/login')
      }
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div className='bg-gray-100'>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
            <input className="block w-full p-2 mb-2 border rounded" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" />
            <input className="block w-full p-2 mb-2 border rounded" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
            <input className="block w-full p-2 mb-2 border rounded" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
            <input className="block w-full p-2 mb-2 border rounded" type="text" name="rua" value={formData.rua} onChange={handleChange} placeholder="Rua" />
            <input className="block w-full p-2 mb-2 border rounded" type="text" name="bairro" value={formData.bairro} onChange={handleChange} placeholder="Bairro" />
            <select
                name="cidadeId"
                className="block w-full p-2 mb-2 border rounded"
                value={formData.cidadeId}
                onChange={handleChange}>
                <option value="">Selecione a cidade</option>
                { cidades.map((cidade:any) => (
                <option key={cidade.id} value={cidade.id}>
                    {cidade.name}
                </option>
                ))}
            </select>
            <input className="block w-full p-2 mb-2 border rounded" type="text" name="uf" value={formData.uf} onChange={handleChange} placeholder="Estado" />
            <button className="block w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Criar Usuário</button>
        </form>
        {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-4 rounded shadow">
                <p className="text-green-600 text-lg font-semibold mb-2">Usuário criado com sucesso!</p>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => setShowSuccessModal(false)}
                >
                    Fechar
                </button>
            </div>
        </div>
      )}
    </div>
  );
}

export default CreateUserForm;