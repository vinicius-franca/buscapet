import CreateUserForm from "@/components/CreateUserForm";
import Layout from "./layout";
import Image from 'next/image'

function RegistroPage() {
    return (
      <Layout>
      {
        <div>
          <Image
            className="h-auto max-w-full mb-10"
            src="/buscapet-logo.svg"
            width={280}
            height={100}
            alt="BuscaPet App"
          />
          <CreateUserForm />
        </div>
      }
      </Layout>
    );
  }

export default RegistroPage