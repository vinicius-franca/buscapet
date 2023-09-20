import { signOut, useSession } from "next-auth/react";

export default function LogoutPage() {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <div>
          <h1>Logout</h1>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in.</h1>
        </div>
      )}
    </>
  );
}