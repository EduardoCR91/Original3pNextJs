"use client";
import { useState } from "react";

export default function ConectaRed() {
  const [mensajes, setMensajes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const enviarMensaje = () => {
    if (input.trim() !== "") {
      setMensajes([...mensajes, input]);
      setInput("");
    }
  };

  return (
    <section className="flex flex-col items-center px-4 pt-10 pb-20 min-h-screen w-full">
      <div className="flex flex-col h-[calc(100vh-6rem)] w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">ConectaRed 💬</h1>
        <div className="flex-1 w-full overflow-y-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-4 border border-gray-200">
        {mensajes.length === 0 ? (
            <p className="text-gray-500 text-center h-full flex items-center justify-center">Aún no hay mensajes. ¡Escribe algo!</p>
        ) : (
            <div className="flex flex-col gap-3">
              {mensajes.map((msg, i) => (
                <p key={i} className="bg-blue-500 text-white rounded-xl px-4 py-2 self-start max-w-lg shadow">
                  {msg}
                </p>
              ))}
            </div>
        )}
        </div>

        <div className="flex w-full gap-3 mt-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            className="flex-1 border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
          />
          <button
            onClick={enviarMensaje}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </div>
      </div>
    </section>
  );
}