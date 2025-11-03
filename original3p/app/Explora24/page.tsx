"use client";
import { useState, useEffect } from "react";

export default function Explora24() {
  const [dato, setDato] = useState("");

  const curiosidades = [
    "Los pulpos tienen tres corazones.",
    "El corazón de un camarón está en su cabeza.",
    "Los flamencos son rosados por su dieta rica en carotenoides.",
    "El sol tarda 8 minutos en llegar a la Tierra.",
    "Las abejas pueden reconocer rostros humanos."
  ];

  useEffect(() => {
    setDato(curiosidades[Math.floor(Math.random() * curiosidades.length)]);
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-center min-h-screen px-6">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Explora24 🌍</h1>
      <p className="text-lg bg-white rounded-2xl shadow p-5 mb-6 w-full max-w-md">
        {dato}
      </p>
      <button
        onClick={() => setDato(curiosidades[Math.floor(Math.random() * curiosidades.length)])}
        className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all"
      >
        Ver otra curiosidad
      </button>
    </section>
  );
}