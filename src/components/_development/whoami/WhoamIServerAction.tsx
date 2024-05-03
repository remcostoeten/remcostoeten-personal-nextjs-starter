"use client";
import { useEffect, useState } from "react";

export default function WhoAmIServerAction({
  onGetUserAction,
}: {
  onGetUserAction: () => Promise<string | null>;
}) {
  const [user, setUser] = useState<string | null>();

  useEffect(() => {
    onGetUserAction().then((user) => setUser(user));
  }, []);

  return <span>Who Am I (server action): {user}</span>;
}