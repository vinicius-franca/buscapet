
import CreateUserForm from '@/components/CreateUserForm';
import { Suspense } from 'react';

function RegistroLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center text-dark-color">Criar Novo Usuário</h1>
        <CreateUserForm />
      </div>
    </div>
  );
}

export default RegistroLayout;