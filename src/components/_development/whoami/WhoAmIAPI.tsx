"use client";
import { useEffect, useState } from "react";

export default function WhoAmIAPI() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then(({ user }) => setUser(user));
  }, []);
  return <span>Who Am I (client): {user}</span>;
}