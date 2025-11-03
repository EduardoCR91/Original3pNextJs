"use client";
import { useState } from "react";

export default function MiRetoFit() {
  const retos = [
    "Haz 20 abdominales hoy 💪",
    "Medita 10 minutos 🧘‍♂️",
    "Toma 2 litros de agua 💧",
    "Camina 15 minutos 🚶‍♀️",
    "Haz 10 estiramientos de cuello 🦒",
    "Haz 3 series de 10 sentadillas (sin peso) 🦵",
    "Prepara una cena sin carnes rojas (vegetariana o con pescado) 🥗",
    "Mantén la posición de plancha durante 45 segundos 🧘",
    "Lee sobre un tema nuevo de nutrición durante 5 minutos 🧠",
    "Añade una fruta o verdura de un color nuevo a tu dieta hoy 🌈",
    "Sube las escaleras dos veces extra hoy (en lugar de usar el ascensor) ⬆️",
    "Realiza 30 segundos de saltos de tijera (Jumping Jacks) 🤸",
    "Pasa 30 minutos sin usar ninguna pantalla (celular, TV, computadora) 📵",
  ];

  const [reto, setReto] = useState(retos[Math.floor(Math.random() * retos.length)]);
  const [completado, setCompletado] = useState(false);

  const nuevoReto = () => {
    setReto(retos[Math.floor(Math.random() * retos.length)]);
    setCompletado(false);
  };

  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
      <h1 className="text-3xl font-bold mb-4 text-green-700">MiRetoFit 🏋️</h1>
      <p className="text-lg bg-white rounded-2xl shadow p-5 mb-6 w-full max-w-md">{reto}</p>

      {!completado ? (
        <button
          onClick={() => setCompletado(true)}
          className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all"
        >
          ¡Reto completado!
        </button>
      ) : (
        <button
          onClick={nuevoReto}
          className="bg-yellow-500 text-white px-5 py-2 rounded-full hover:bg-yellow-600 transition-all"
        >
          Nuevo reto
        </button>
      )}
    </section>
  );
}