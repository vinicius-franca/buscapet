import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react"



export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between  bg-gray-200">
      <div className="z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex">
        <form method="post" action="/api/auth/signin/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            <input type="email" id="email" name="email" />
            <input type="password" id="password" name="password" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}