import React from "react";
import { auth } from "@/auth";
import WhoAmIAPI from "./WhoAmIAPI";
import WhoAmIRSC from "./WhoamIRS";
import WhoAmIServerAction from "./WhoamIServerAction";
import SessionDebugger from "./session-debugger";

export default async function WhoAmI() {
  const session = await auth();

  async function onGetUserAction() {
    "use server";
    const session = await auth();
    return session?.user?.name ?? null;
  }

  return (
    <main className="flex flex-col bg-zinc-800 border border-dashed  p-10 ">
      <div>
        <SessionDebugger />
      </div>
      <div className="flex flex-col gap-1">
        <span>User: {session?.user?.name}</span>
        <hr/>
        <WhoAmIServerAction onGetUserAction={onGetUserAction} />
        <hr/>
        <WhoAmIAPI />
        <hr/>
        <WhoAmIRSC />
      </div>
    </main>
  );
}