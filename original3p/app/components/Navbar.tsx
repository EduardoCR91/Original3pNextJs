"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/Explora24", label: "Explora24" },
    { href: "/MiRetoFit", label: "MiRetoFit" },
    { href: "/ConectaRed", label: "ConectaRed" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-lg flex justify-around py-3 z-50">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`font-medium ${
            pathname === link.href ? "text-blue-700 underline" : "text-gray-600 hover:text-blue-600"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}