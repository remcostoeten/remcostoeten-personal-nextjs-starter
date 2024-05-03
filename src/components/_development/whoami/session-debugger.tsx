import AuthButton from "@/AuthButton.client";
import { auth } from "@/auth/auth-options";


export default async function SessionDebugger() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-2">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <AuthButton />
    </div>
  );
}