import CreateUserForm from "@/components/CreateUserForm";
import Layout from "./layout";

function RegistroPage() {
    return (
      <Layout>
      {
        <div>
          <h1>Criar Novo Usuário</h1>
          <CreateUserForm />
        </div>
      }
      </Layout>
    );
  }

export default RegistroPage