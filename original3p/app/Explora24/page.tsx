"use client";
import { useState, useEffect } from "react";

export default function Explora24() {
  const [dato, setDato] = useState("");

  const curiosidades = [
    "Los pulpos tienen tres corazones.",
    "El corazón de un camarón está en su cabeza.",
    "Los flamencos son rosados por su dieta rica en carotenoides.",
    "El sol tarda 8 minutos en llegar a la Tierra.",
    "Las abejas pueden reconocer rostros humanos.",
    "El lugar más seco de la Tierra es el Desierto de Atacama en Chile, donde algunos sectores no han recibido lluvia registrada en siglos.",
    "Existe un volcán activo llamado Mount Erebus en la Antártida que arroja cristales de oro puro a la atmósfera.",
    "La Gran Barrera de Coral no es una sola estructura, sino la estructura viva más grande del mundo, visible incluso desde el espacio.",
    "Más del 90% del agua dulce del planeta se encuentra en las capas de hielo de la Antártida y Groenlandia.",
    "Técnicamente, el país que tiene más pirámides no es Egipto, sino Sudán, con más de 200 estructuras.",
    "Se estima que los océanos del mundo contienen cerca de 20 millones de toneladas de oro, aunque está tan diluido que es imposible de extraer.",
    "La temperatura más fría jamás registrada de forma natural en la Tierra fue de $ -89.2^\circ C$ ($ -128.6^\circ F$) en la Base Vostok, Antártida.",
    "La muralla china no es visible a simple vista desde la órbita terrestre baja (cercana a la Tierra), contrariamente a la creencia popular.",
    "Hay más organismos vivos en una sola cucharada de tierra que personas vivas en todo el planeta.",
    "Los rayos golpean la Tierra aproximadamente 8.6 millones de veces al día (unas 100 veces por segundo)."
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