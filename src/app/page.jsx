import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center min-h-screen flex-col bg-zinc-900 justify-center">
      <div className="bg-zinc-700 rounded-lg shadow-lg p-6 wfull max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">Almacenamiento de Fotos</h2>
        <p className="mb-6 text-lg text-center">Ingrese, suba sus fotos y agregelas a favoritos.</p>
        {/* TAREA: AuthForm */}
      </div>
    </main>
  );
}
