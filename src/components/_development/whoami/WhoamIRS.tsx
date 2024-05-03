import { headers } from "next/headers";

export default async function WhoAmIRSC() {
  const { user } = await fetch("http://localhost:3000/api/whoami", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return <span>Who Am I (RSC): {user}</span>;
}