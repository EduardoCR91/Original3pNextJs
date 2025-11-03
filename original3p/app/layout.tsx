import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Original3p",
  description: "Tres pestañas originales con Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen`}>
        <main className="pb-20">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}