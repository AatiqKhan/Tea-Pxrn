import React from "react";
import { useState } from "react";
import { useLogin } from "./useLogin";
import { Input } from "@mui/material";

export default function LoginForm() {
  const [email, setEmail] = useState("aatiq@gmail.com");
  const [password, setPassword] = useState("akayisakay");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      },
    );
  }
  return (
    <div className="h-full w-full bg-gray-300">
      <div>helloooo</div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Email Id"
          autoComplete="email"
          type="email"
          variant="outlined"
          disabled={isLoading}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="PASSWORD"
          autoComplete="current-password"
          type="password"
          variant="outlined"
          disabled={isLoading}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>LOG IN</button>
      </form>
    </div>
  );
}
