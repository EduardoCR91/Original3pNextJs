export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Bienvenido 👋</h1>
      <p className="text-lg mb-4">Explora nuestras pestañas originales:</p>
      <ul className="text-left bg-white rounded-2xl shadow p-5 space-y-2">
        <li>🌍 <strong>Explora24:</strong> Curiosidades diarias</li>
        <li>💪 <strong>MiRetoFit:</strong> Retos de bienestar</li>
        <li>💬 <strong>ConectaRed:</strong> Espacio para mensajes</li>
      </ul>
    </section>
  );
}