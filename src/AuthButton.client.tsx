"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "./auth/auth-options";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <button className="bg-black rounded-lg text-white p-4"
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </button>
  ) : (
    <button  className='bg-black text-white rounded-lg' onClick={async () => await signIn()}>Sign In</button>
  );
}