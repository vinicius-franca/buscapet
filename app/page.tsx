"use client";
import { useEffect, useState } from 'react';

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getUsers');
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    }

    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1>Lista de Usuários</h1>
        <ul>
          {users.map((user:any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
export default Home;