import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen flex-col bg-zinc-900 justify-center">
      <div className="bg-zinc-800/70 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-amber-100 text-2xl font-bold text-center">
          Almacenamiento de Fotos
        </h2>
        <p className="mb-8 text-center font-extralight text-sm">
          Ingrese, suba sus fotos y agregelas a favoritos.
        </p>
        {/* TAREA: AuthForm */}
        <AuthForm />
      </div>
    </main>
  );
}
