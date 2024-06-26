"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { signIn, signOut } from "@/core/helpers/login-logout";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Button
      onClick={async () => {
        await signOut();
        await signIn();
      }}
    >
      {session.data?.user?.name} : Sign Out
    </Button>
  ) : (
    <Button variant="secondary" onClick={async () => await signIn()}>Sign In</Button>
  );
}