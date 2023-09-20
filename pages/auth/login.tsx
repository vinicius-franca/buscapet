import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <form method="post" action="/api/auth/signin/credentials">
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label>
        Email address
        <input type="email" id="email" name="email" />
        <input type="password" id="password" name="password" />
      </label>
      <button type="submit">Sign in with Email</button>
    </form>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context)
  return {
    props: { csrfToken },
  }
}