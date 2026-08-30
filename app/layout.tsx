import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // Herramienta de Next.js para navegar sin recargar la página

const inter = Inter({ subsets: ["latin"] });

// Aquí configuramos el SEO global para que Google te encuentre
export const metadata: Metadata = {
  title: "S&R Contadores | Outsourcing Contable, Tributario y Laboral",
  description: "Blindamos tu empresa contra multas y contingencias en Perú. Contabilidad con tecnología ERP y gestión laboral.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        
        {/* BARRA DE NAVEGACIÓN GLOBAL (Menú) */}
        <nav className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo de S&R Contadores */}
            <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 tracking-tighter hover:scale-105 transition-transform">
              S&R<span className="text-white text-lg font-medium tracking-normal ml-1">Contadores</span>
            </Link>

            {/* Enlaces de navegación */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Blog y Recursos
              </Link>
              
              {/* Botón de Acceso al Portal */}
              <Link href="/login" className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold rounded-lg border border-slate-700 transition-all flex items-center gap-2">
                <span>🔒</span> Acceso VIP
              </Link>
            </div>
            
          </div>
        </nav>

        {/* CONTENIDO DINÁMICO (Aquí se cargan tus demás páginas) */}
        {children}
        
      </body>
    </html>
  );
}