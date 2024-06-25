"use client";

import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    // TASK: handleLogin
    setIsSigningIn(true);
    const { error } = await supabase.auth.signIn({ email, password });
    setIsSigningIn(false);
    if (error) {
      console.error("Error logging in:", error);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    setIsSigningUp(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error("Error signing up:", error);
      setIsSigningUp(false);
    } else {
      // console.log({ data });
      setIsSigningUp(false);
      // alert("¡Correo enviado! Revisa tu correo para confirmar la suscripción.");
    }
  }

  let signInMessage = "Iniciar sesión";

  if (isNewUser) {
    signInMessage = "Crear una cuenta";
  }

  return (
    <form
      onSubmit={isNewUser ? handleSignUp : handleLogin}
      className="space-y-8"
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="text-zinc-500 appearance-none rounded relative block w-full px-3 py-2 border border-gray-600"
        autoComplete="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-zinc-500 appearance-none rounded relative block w-full px-3 py-2 border border-gray-600"
        placeholder="password"
        autoComplete="current-password"
      />

      {/* El type="submit" acciona: <form onSubmit={isNewUser ? handleSignUp : handleLogin}>  */}
      <button
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent bg-slate-700 hover:bg-slate-600 rounded"
      >
        {signInMessage}
      </button>

      <p className="text-center text-white">
        {isNewUser ? (
          <>
            <span className="flex justify-center gap-2">
              <span>¿Ya tienes una cuenta?</span>{" "}
              <button
                type="button"
                onClick={() => setIsNewUser(false)}
                className="text-amber-100 hover:text-amber-200"
              >
                iniciar sesión
              </button>
            </span>
          </>
        ) : (
          <>
            <span className="flex justify-center gap-2">
              <span>¿No tienes una cuenta?</span>

              <button
                type="button"
                onClick={() => setIsNewUser(true)}
                className="text-amber-100 hover:text-amber-200"
              >
                <span>¡Crea una cuenta!</span>
              </button>
            </span>
          </>
        )}
      </p>

      {/* Si es falso devuelve null, si es verdadero devuelve lo que este en signInUpMessage. */}
      {isSigningUp && (
        <p className="text-center text-white">
          ¡Correo enviado! Revisa tu correo para confirmar la suscripción.
        </p>
      )}
    </form>
  );
}
